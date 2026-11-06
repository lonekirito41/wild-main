package com.wildlife.tracker.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Map;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AccountRepository accounts;
    private final PasswordEncoder passwords;
    public AuthController(AccountRepository accounts, PasswordEncoder passwords) { this.accounts = accounts; this.passwords = passwords; }

    @PostMapping("/register")
    public Account register(@Valid @RequestBody AuthRequest body, HttpServletRequest request) {
        validateBcryptLength(body.password());
        if (accounts.findByUsername(body.username()).isPresent()) throw new ResponseStatusException(HttpStatus.CONFLICT, "That username is already registered.");
        if (accounts.findByEmail(body.email()).isPresent()) throw new ResponseStatusException(HttpStatus.CONFLICT, "That email is already registered.");
        try {
            Account account = accounts.create(body.username().trim(), body.email().trim(), passwords.encode(body.password()));
            establishSession(request, account);
            return account;
        } catch (DuplicateKeyException duplicate) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "That username or email is already registered.");
        }
    }

    @PostMapping("/login")
    public Account login(@Valid @RequestBody AuthRequest body, HttpServletRequest request) {
        validateBcryptLength(body.password());
        String hash = accounts.passwordHash(body.username()).orElse(null);
        Account account = accounts.findByUsername(body.username()).orElse(null);
        if (hash == null || account == null || !account.email().equalsIgnoreCase(body.email()) || !passwords.matches(body.password(), hash)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email, username, or password is wrong.");
        }
        establishSession(request, account);
        return account;
    }

    @GetMapping("/me")
    public Account me(HttpSession session) {
        Object account = session.getAttribute("account");
        if (account instanceof Account current) return current;
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Please sign in.");
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(HttpSession session) { session.invalidate(); }

    private void establishSession(HttpServletRequest request, Account account) {
        HttpSession old = request.getSession(false);
        if (old != null) old.invalidate();
        request.getSession(true).setAttribute("account", account);
    }

    private void validateBcryptLength(String password) {
        if (password.getBytes(StandardCharsets.UTF_8).length > 72) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password must be no longer than 72 UTF-8 bytes.");
        }
    }

    @ExceptionHandler(org.springframework.web.bind.MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> invalidInput() { return Map.of("message", "Check your email, username, and password. Passwords must be at least 8 characters."); }

    @ExceptionHandler(ResponseStatusException.class)
    public org.springframework.http.ResponseEntity<Map<String, String>> authError(ResponseStatusException error) {
        return org.springframework.http.ResponseEntity.status(error.getStatusCode())
            .body(Map.of("message", error.getReason() == null ? "Authentication failed." : error.getReason()));
    }
}
