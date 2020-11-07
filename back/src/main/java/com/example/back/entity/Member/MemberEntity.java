package com.example.back.entity.Member;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "member")
@Data
public class MemberEntity {
    @GeneratedValue
    @Id
    private Long id;

    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Lole role;
}
