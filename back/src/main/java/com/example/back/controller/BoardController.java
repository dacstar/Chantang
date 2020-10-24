package com.example.back.controller;

import com.example.back.entity.Board.BoardEntity;
import com.example.back.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/boards")
    public ResponseEntity<List<BoardEntity>> findAll() {
        return new ResponseEntity<List<BoardEntity>>(boardService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/boards")
    public ResponseEntity<BoardEntity> save(@RequestBody BoardEntity boardEntity) {
        boardService.save(boardEntity);
        return new ResponseEntity<BoardEntity>(boardEntity, HttpStatus.OK);
    }
}
