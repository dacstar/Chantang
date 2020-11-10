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

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SessionService {

    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    // login
    public LoginResponse login(LoginRequest loginRequest) {

        List<MemberEntity> members = memberRepository.findByMemberId(loginRequest.getMemberId());

        if(members.isEmpty()) {
            throw new IllegalStateException("fail_login");
        }

        MemberEntity member = members.stream().findFirst().get();
        String planePassword = loginRequest.getPassword();
        String originPassword = member.getPassword();

        boolean isMatch = passwordEncoder.matches(planePassword, originPassword);

        if(!isMatch) {
            throw new IllegalStateException("fail_login");
        } else {
            LoginResponse response = new LoginResponse();
            response.setAccessToken(jwtTokenProvider.createToken(member.getId(), false));
            response.setRefreshToken(jwtTokenProvider.createToken(member.getId(), true));
            return response;
        }
    }
}
