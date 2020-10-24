package com.example.back.service;

import com.example.back.entity.Board.BoardEntity;
import com.example.back.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    // create board
    @Transactional
    public Long save(BoardEntity boardEntity) {
         boardRepository.save(boardEntity);
         return boardEntity.getId();
    }
    // findAll board
    public List<BoardEntity> findAll() {
        return boardRepository.findAll();
    }
    // findOne board
    public BoardEntity findOne(Long id){
        return boardRepository.findOne(id);
    }
    // findByName board
    public List<BoardEntity> findByTitle(String title) {
        return boardRepository.findByTitle(title);
    }
}
