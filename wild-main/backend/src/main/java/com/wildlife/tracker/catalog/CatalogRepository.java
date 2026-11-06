package com.wildlife.tracker.catalog;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class CatalogRepository {
    private final JdbcTemplate jdbc;
    public CatalogRepository(JdbcTemplate jdbc) { this.jdbc = jdbc; }
    public List<Species> species(String query, String category) {
        return jdbc.query("SELECT id,common_name,category,conservation_status,description,image_url,image_position,habitat,diet,behaviour FROM species WHERE (CAST(? AS VARCHAR) IS NULL OR LOWER(common_name) LIKE '%' || LOWER(?) || '%') AND (CAST(? AS VARCHAR) IS NULL OR category = ?) ORDER BY common_name",
            (rs, row) -> new Species(rs.getLong("id"),rs.getString("common_name"),rs.getString("category"),rs.getString("conservation_status"),rs.getString("description"),rs.getString("image_url"),rs.getString("image_position"),rs.getString("habitat"),rs.getString("diet"),rs.getString("behaviour")), query,query,category,category);
    }
    public List<WildlifeLocation> locations(String query) {
        return jdbc.query("SELECT id,name,habitat,image_url,map_query FROM locations WHERE (CAST(? AS VARCHAR) IS NULL OR LOWER(name) LIKE '%' || LOWER(?) || '%') ORDER BY name",
            (rs, row) -> new WildlifeLocation(rs.getLong("id"),rs.getString("name"),rs.getString("habitat"),rs.getString("image_url"),rs.getString("map_query")), query,query);
    }
    public boolean speciesExists(long id) { return Boolean.TRUE.equals(jdbc.queryForObject("SELECT EXISTS(SELECT 1 FROM species WHERE id = ?)", Boolean.class, id)); }
    public boolean locationExists(long id) { return Boolean.TRUE.equals(jdbc.queryForObject("SELECT EXISTS(SELECT 1 FROM locations WHERE id = ?)", Boolean.class, id)); }
}
