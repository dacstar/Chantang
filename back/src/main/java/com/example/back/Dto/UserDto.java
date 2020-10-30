package com.example.back.Dto;

import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String address;
    private String role;
}
