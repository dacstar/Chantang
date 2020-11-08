package com.example.back.entity.Member;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Data
public class MemberEntity {
    @GeneratedValue
    @Id
    private Long id;

    @Column(name = "member_id")
    private String memberId;

    private String password;

    private String name;

    @Enumerated(EnumType.STRING)
    private Lole role;
}
