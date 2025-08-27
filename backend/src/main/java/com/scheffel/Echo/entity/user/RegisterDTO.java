package com.scheffel.Echo.entity.user;

public record RegisterDTO(
        String fullName,
        String email,
        String password,
        UserRole role
) {}
