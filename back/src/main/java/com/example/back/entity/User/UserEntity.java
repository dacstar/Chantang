package com.example.back.entity.User;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "User")
@Data
public class UserEntity {
    @GeneratedValue
    @Id
    private Long id;

    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Lole role;
}
