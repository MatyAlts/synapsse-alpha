package com.synapsse.backend.dto;

public record AuthResponse(
        String token,
        String email,
        boolean isAdmin
) {}
