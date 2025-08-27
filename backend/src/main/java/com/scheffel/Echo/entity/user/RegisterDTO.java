package com.scheffel.Echo.entity.user;

public record RegisterDTO(
        String login,
        String email,
        String password,
        UserRole role
) {}
