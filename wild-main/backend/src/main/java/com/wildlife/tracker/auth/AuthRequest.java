package com.wildlife.tracker.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AuthRequest(
    @NotBlank @Email @Size(max = 254) String email,
    @NotBlank @Size(min = 3, max = 40) String username,
    @NotBlank @Size(min = 8, max = 72) String password
) {}
