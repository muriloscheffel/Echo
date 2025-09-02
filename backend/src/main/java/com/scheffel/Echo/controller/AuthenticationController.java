package com.scheffel.Echo.controller;

import com.scheffel.Echo.domain.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;
import com.scheffel.Echo.service.AuthenticationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
        LoginResponseDTO loginResponse = this.authenticationService.login(data, authenticationManager);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) {
        return this.authenticationService.register(data);
    }

    //@PostMapping("/changeusername")
    //public ResponseEntity changeUsername(@RequestBody @Valid AuthenticationDTO data, String username) {
    //}
}

