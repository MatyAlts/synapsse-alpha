package com.synapsse.backend.dto;

import com.synapsse.backend.entity.Role;

import java.time.Instant;
import java.util.Set;

public record UserSummary(
        Long id,
        String email,
        Set<Role> roles,
        Instant createdAt
) {}
