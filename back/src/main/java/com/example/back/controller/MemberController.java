package com.example.back.controller;

import com.example.back.entity.Member.MemberEntity;
import com.example.back.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService userService;

    @PostMapping("/member/register")
    public ResponseEntity<MemberEntity> Register(@RequestBody MemberEntity userEntity) {
        userService.join(userEntity);
        System.out.println(userEntity.getName() + " " + userEntity.getAddress() + " " + userEntity.getRole());
        return new ResponseEntity<MemberEntity>(userEntity, HttpStatus.OK);
    }

    @GetMapping("/member/find/{name}")
    public ResponseEntity<List<MemberEntity>> findByUser(@PathVariable String name) {

        List<MemberEntity> user = userService.findByName(name);
        return new ResponseEntity<List<MemberEntity>>(user, HttpStatus.OK);
    }

}
