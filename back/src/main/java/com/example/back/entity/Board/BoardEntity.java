package com.example.back.entity.Board;

import javax.persistence.*;

@Entity
@Table (name="board")
public class BoardEntity {
    
    @Id
    private Long id;
    
    private String title;
    
    private String themeType;
    
    private String serviceArea;
    
    private String content;
    
    private String detailContent;
    
    private Long views;

    //findAll
    public BoardEntity(){
        
    }

    public BoardEntity(Long id, String title, String themeType, String serviceArea, String content, String detailContent, Long views) {
        this.id = id;
        this.title = title;
        this.themeType = themeType;
        this.serviceArea = serviceArea;
        this.content = content;
        this.detailContent = detailContent;
        this.views = views;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getThemeType() {
        return this.themeType;
    }

    public void setThemeType(String themeType) {
        this.themeType = themeType;
    }

    public String getServiceArea() {
        return this.serviceArea;
    }

    public void setServiceArea(String serviceArea) {
        this.serviceArea = serviceArea;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDetailContent() {
        return this.detailContent;
    }

    public void setDetailContent(String detailContent) {
        this.detailContent = detailContent;
    }

    public Long getViews() {
        return this.views;
    }

    public void setViews(Long views) {
        this.views = views;
    }
    
    
}
