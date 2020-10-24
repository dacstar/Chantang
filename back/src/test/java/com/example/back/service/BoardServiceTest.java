package com.example.back.service;

import com.example.back.entity.Board.BoardEntity;
import com.example.back.repository.BoardRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class BoardServiceTest {
    @Autowired BoardService boardService;
    @Autowired BoardRepository boardRepository;

    @Test
    public void save() throws Exception {
        //given
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setTitle("title");
        boardEntity.setContent("content");

        //when
        Long savedId = boardService.save(boardEntity);
        System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + savedId);
        //then
        assertEquals(boardEntity, boardRepository.findOne(savedId));
    }
}