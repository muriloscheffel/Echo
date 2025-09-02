package com.scheffel.Echo.domain.user;

public record RegisterDTO(
        String fullName,
        String email,
        String password
) {}
