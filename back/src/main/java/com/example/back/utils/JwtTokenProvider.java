package com.example.back.utils;

import com.example.back.entity.Member.MemberEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtTokenProvider {

    private String secretKey = "secretKey";
    private Long accessTokenvalidTime = 30 * 60 * 1000L;
    private Long refreshTokenvalidTime = 500 * 60 * 1000L;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // 엑세스 토큰 생성
    public String createToken(Long id, boolean isRefreshToken) {
        Date issueAt = new Date();
        Date expireAt = new Date( issueAt.getTime() + (isRefreshToken ? refreshTokenvalidTime : accessTokenvalidTime));

        return Jwts.builder()
                .claim("memberId", id)
                .setIssuedAt(issueAt)
                .setExpiration(expireAt)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // 토큰에서 멤버 아이디 가져오기
    public String getMemberId(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    // Request의 Header에서 accessToken parse : "X-AUTH-TOKEN" : "TOKEN값'
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("X-AUTH-TOKEN");
    }
}
