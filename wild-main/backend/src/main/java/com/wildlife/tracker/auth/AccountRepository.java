package com.wildlife.tracker.auth;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.Locale;
import java.util.Optional;

@Repository
public class AccountRepository {
    private final JdbcTemplate jdbc;
    public AccountRepository(JdbcTemplate jdbc) { this.jdbc = jdbc; }
    public Optional<Account> findByUsername(String username) {
        return jdbc.query("SELECT id, username, email FROM app_users WHERE username_normalized = ?", rs -> rs.next() ? Optional.of(new Account(rs.getLong("id"), rs.getString("username"), rs.getString("email"))) : Optional.empty(), username.trim().toLowerCase(Locale.ROOT));
    }
    public Optional<Account> findByEmail(String email) {
        return jdbc.query("SELECT id, username, email FROM app_users WHERE email_normalized = ?", rs -> rs.next() ? Optional.of(new Account(rs.getLong("id"), rs.getString("username"), rs.getString("email"))) : Optional.empty(), email.trim().toLowerCase(Locale.ROOT));
    }
    public Optional<String> passwordHash(String username) {
        return jdbc.query("SELECT password_hash FROM app_users WHERE username_normalized = ?", rs -> rs.next() ? Optional.of(rs.getString(1)) : Optional.empty(), username.trim().toLowerCase(Locale.ROOT));
    }
    public Account create(String username, String email, String passwordHash) {
        String cleanUsername = username.trim();
        String cleanEmail = email.trim();
        jdbc.update("INSERT INTO app_users (username, username_normalized, email, email_normalized, password_hash) VALUES (?, ?, ?, ?, ?)", cleanUsername, cleanUsername.toLowerCase(Locale.ROOT), cleanEmail, cleanEmail.toLowerCase(Locale.ROOT), passwordHash);
        return findByUsername(username).orElseThrow();
    }
}
