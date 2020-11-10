package com.example.back.controller;

import com.example.back.dto.LoginRequest;
import com.example.back.dto.LoginResponse;
import com.example.back.service.MemberService;
import com.example.back.service.SessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SessionController {

    private final SessionService sessionService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = sessionService.login(loginRequest);
        return new ResponseEntity<LoginResponse>(response,HttpStatus.OK);
    }
}
