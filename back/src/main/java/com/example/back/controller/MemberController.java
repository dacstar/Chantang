package com.example.back.controller;

import com.example.back.entity.Member.MemberEntity;
import com.example.back.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/member/register")
    public ResponseEntity<MemberEntity> Register(@RequestBody MemberEntity memberEntity) {

        memberService.join(memberEntity);
        System.out.println(memberEntity.getName() + " " + memberEntity.getRole());
        return new ResponseEntity<MemberEntity>(memberEntity, HttpStatus.OK);
    }

    @GetMapping("/member/find/{name}")
    public ResponseEntity<List<MemberEntity>> findByUser(@PathVariable String name) {

        List<MemberEntity> user = memberService.findByName(name);
        return new ResponseEntity<List<MemberEntity>>(user, HttpStatus.OK);
    }

}
