package com.example.back.Dto;

import lombok.Data;

@Data
public class BoardDto {
    private Long id;
    private String title;
    private String themeType;
    private String serviceArea;
    private String content;
    private String detailContent;
    private Long views;
}
