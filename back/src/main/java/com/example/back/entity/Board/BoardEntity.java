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

    private String themetype;

    private String servicearea;

    private String content;

    private String detailcontent;

    private Long views;
}
