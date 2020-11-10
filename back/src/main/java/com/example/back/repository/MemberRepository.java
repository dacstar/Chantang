package com.example.back.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;

import com.example.back.entity.Member.MemberEntity;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    // 회원가입
    public void save(MemberEntity user) {
        em.persist(user);
    }

    public MemberEntity findOne(Long id) {
        return em.find(MemberEntity.class, id);
    }

    // findAll user
    public List<MemberEntity> findAll() {
        return em.createQuery("select u from MemberEntity u", MemberEntity.class).getResultList();
    }

    // findByName user
    public List<MemberEntity> findByName(String name) {
        return em.createQuery("select u from MemberEntity u where u.name = :name", MemberEntity.class)
                .setParameter("name", name).getResultList();
    }

    // findByMemberId user
    public List<MemberEntity> findByMemberId(String memberId) {
        return em.createQuery("select u from MemberEntity u where u.memberId = :memberId", MemberEntity.class)
                .setParameter("memberId", memberId).getResultList();
    }
}
