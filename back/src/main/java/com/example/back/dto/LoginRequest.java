package com.example.back.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String memberId;
    private String password;
}