package com.example.back.service;

import com.example.back.dto.LoginRequest;
import com.example.back.dto.LoginResponse;
import com.example.back.entity.Member.MemberEntity;
import com.example.back.repository.MemberRepository;
import com.example.back.utils.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// @Transactional(readOnly = true) --> optimize performance
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;

    // save user
    @Transactional
    public Long join(MemberEntity user) {
        validateDuplicateUser(user);
        String encodePassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodePassword);
        memberRepository.save(user);
        return user.getId();
    }

    // 중복 회원 검사
    private void validateDuplicateUser(MemberEntity user) {
        List<MemberEntity> findUser = memberRepository.findByMemberId(user.getMemberId());
        if (findUser.isEmpty()) {
            throw new IllegalStateException("exist_member");
        }
    }

    // findAll user
    public List<MemberEntity> findAll() {
        return memberRepository.findAll();
    }

    // findOne user
    public MemberEntity findOne(Long id) {
        return memberRepository.findOne(id);
    }

    // findByName user
    public List<MemberEntity> findByName(String name) {
        return memberRepository.findByName(name);
    }
}
