package com.example.back.entity.Board;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "board")
@Data
public class BoardEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @Column(name = "theme_type")
    private String themeType;

    @Column(name = "service_area")
    private String serviceArea;

    private String content;

    @Column(name = "detail_content")
    private String detailContent;

    private Long views;
}
