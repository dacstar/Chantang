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

    private String theme_type;

    private String service_area;

    private String content;

    private String detail_content;

    private Long views;
}
