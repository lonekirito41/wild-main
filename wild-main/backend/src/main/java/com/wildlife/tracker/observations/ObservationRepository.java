package com.wildlife.tracker.observations;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import java.sql.PreparedStatement;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Repository
public class ObservationRepository {
    private final JdbcTemplate jdbc;
    private final RowMapper<Observation> mapper = (rs, row) -> {
        LocalDateTime stamp = rs.getObject("observed_at", LocalDateTime.class);
        LocalDate date = stamp.toLocalDate();
        String season = season(date);
        return new Observation(rs.getLong("id"), rs.getLong("user_id"), rs.getString("username"), rs.getLong("species_id"), rs.getString("common_name"), rs.getString("category"),
            rs.getString("conservation_status"), rs.getString("image_url"), rs.getString("image_position"), rs.getLong("location_id"),
            rs.getString("location_name"), rs.getString("map_query"), date, date.format(DateTimeFormatter.ofPattern("dd MMMM yyyy", Locale.ENGLISH)),
            stamp.toLocalTime().format(DateTimeFormatter.ofPattern("h:mm a", Locale.ENGLISH)), stamp.toLocalTime().withSecond(0).withNano(0).toString(), season, rs.getInt("individual_count"), rs.getString("notes"), rs.getBoolean("sensitive_location"));
    };
    private static final String SELECT = "SELECT o.id,o.user_id,a.username,o.species_id,s.common_name,s.category,s.conservation_status,s.image_url,s.image_position,o.location_id,l.name location_name,l.map_query,o.observed_at,o.individual_count,o.notes,o.sensitive_location FROM observations o JOIN app_users a ON a.id=o.user_id JOIN species s ON s.id=o.species_id JOIN locations l ON l.id=o.location_id ";
    public ObservationRepository(JdbcTemplate jdbc) { this.jdbc = jdbc; }
    public List<Observation> find(long userId, String q, Long animalId, Long locationId, String season, LocalDate from, LocalDate to) {
        LocalDateTime fromStart = from == null ? null : from.atStartOfDay();
        LocalDateTime toExclusive = to == null ? null : to.plusDays(1).atStartOfDay();
        return jdbc.query(SELECT + "WHERE (?=0 OR o.user_id=?) AND (CAST(? AS VARCHAR) IS NULL OR LOWER(s.common_name) LIKE '%' || LOWER(?) || '%' OR LOWER(l.name) LIKE '%' || LOWER(?) || '%') AND (CAST(? AS BIGINT) IS NULL OR o.species_id=?) AND (CAST(? AS BIGINT) IS NULL OR o.location_id=?) AND (CAST(? AS VARCHAR) IS NULL OR (CASE WHEN EXTRACT(MONTH FROM o.observed_at) IN (3,4,5) THEN 'Spring' WHEN EXTRACT(MONTH FROM o.observed_at) IN (6,7) THEN 'Summer' WHEN EXTRACT(MONTH FROM o.observed_at) IN (8,9,10) THEN 'Monsoon' ELSE 'Winter' END)=?) AND (CAST(? AS TIMESTAMP) IS NULL OR o.observed_at >= ?) AND (CAST(? AS TIMESTAMP) IS NULL OR o.observed_at < ?) ORDER BY o.observed_at DESC",
            mapper,userId,userId,q,q,q,animalId,animalId,locationId,locationId,season,season,fromStart,fromStart,toExclusive,toExclusive);
    }
    public Optional<Observation> findOne(long userId,long id) { return jdbc.query(SELECT+"WHERE o.user_id=? AND o.id=?",mapper,userId,id).stream().findFirst(); }
    public Optional<Observation> findAny(long id) { return jdbc.query(SELECT+"WHERE o.id=?",mapper,id).stream().findFirst(); }
    public Observation create(long userId, ObservationRequest body) {
        KeyHolder keys = new GeneratedKeyHolder();
        jdbc.update(connection -> {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO observations(user_id,species_id,location_id,observed_at,individual_count,notes,sensitive_location) VALUES(?,?,?,?,?,?,?)", new String[] { "id" });
            statement.setLong(1,userId); statement.setLong(2,body.animalId()); statement.setLong(3,body.locationId());
            statement.setObject(4,LocalDateTime.of(body.date(),body.time())); statement.setInt(5,body.count());
            statement.setString(6,Optional.ofNullable(body.observation()).orElse("")); statement.setBoolean(7,body.sensitiveLocation());
            return statement;
        },keys);
        Number id = keys.getKey();
        return findOne(userId,id.longValue()).orElseThrow();
    }
    public Optional<Observation> update(long userId,long id,ObservationRequest body) {
        int updated=jdbc.update("UPDATE observations SET species_id=?,location_id=?,observed_at=?,individual_count=?,notes=?,sensitive_location=?,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND id=?",
            body.animalId(),body.locationId(),LocalDateTime.of(body.date(),body.time()),body.count(),Optional.ofNullable(body.observation()).orElse(""),body.sensitiveLocation(),userId,id);
        return updated==0?Optional.empty():findOne(userId,id);
    }
    public boolean delete(long userId,long id) { return jdbc.update("DELETE FROM observations WHERE user_id=? AND id=?",userId,id)>0; }
    public Map<String,Object> summary(long userId) {
        return jdbc.queryForMap("SELECT COUNT(*) total_encounters, COALESCE(SUM(individual_count),0) individuals, COUNT(DISTINCT species_id) unique_animals, COUNT(DISTINCT location_id) locations FROM observations WHERE user_id=?",userId);
    }
    public List<Map<String,Object>> animalCounts(long userId) {
        return jdbc.queryForList("SELECT s.common_name name,COUNT(o.id) encounters,COALESCE(SUM(o.individual_count),0) individuals FROM observations o JOIN species s ON s.id=o.species_id WHERE o.user_id=? GROUP BY s.id,s.common_name ORDER BY encounters DESC,s.common_name",userId);
    }
    public List<Map<String,Object>> seasonCounts(long userId) {
        return jdbc.queryForList("SELECT CASE WHEN EXTRACT(MONTH FROM observed_at) IN (3,4,5) THEN 'Spring' WHEN EXTRACT(MONTH FROM observed_at) IN (6,7) THEN 'Summer' WHEN EXTRACT(MONTH FROM observed_at) IN (8,9,10) THEN 'Monsoon' ELSE 'Winter' END season,COUNT(*) encounters,COUNT(DISTINCT species_id) animals,COUNT(DISTINCT location_id) locations FROM observations WHERE user_id=? GROUP BY season ORDER BY season",userId);
    }
    public static String season(LocalDate date) {
        return switch(date.getMonthValue()) { case 3,4,5 -> "Spring"; case 6,7 -> "Summer"; case 8,9,10 -> "Monsoon"; default -> "Winter"; };
    }
}
