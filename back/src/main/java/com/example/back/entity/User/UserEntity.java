package com.example.back.entity.User;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class UserEntity {
    @GeneratedValue
    @Id
    private Long id;

    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Lole role;

    //findAll
    public UserEntity(){

    }

    public UserEntity(Long id, String name, String address, Lole role) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.role = role;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Lole getRole() {
        return this.role;
    }

    public void setRole(Lole role) {
        this.role = role;
    }

    
    



}
