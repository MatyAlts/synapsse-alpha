package com.synapsse.backend.service;

import com.synapsse.backend.dto.RegisterRequest;
import com.synapsse.backend.dto.UserSummary;
import com.synapsse.backend.entity.Role;
import com.synapsse.backend.entity.User;
import com.synapsse.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.EnumSet;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("Ya existe un usuario con ese email");
        }
        User user = new User();
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        if (request.admin()) {
            user.setRoles(EnumSet.of(Role.ADMIN, Role.CUSTOMER));
        } else {
            user.setRoles(EnumSet.of(Role.CUSTOMER));
        }
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public List<UserSummary> listUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserSummary(user.getId(), user.getEmail(), user.getRoles(), user.getCreatedAt()))
                .toList();
    }

    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
    }
}
