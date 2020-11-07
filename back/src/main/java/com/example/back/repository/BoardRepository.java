package com.example.back.repository;

import com.example.back.entity.Board.BoardEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class BoardRepository {

    private final EntityManager em;

    // save board
    public void save(BoardEntity boardEntity) {
        em.persist(boardEntity);
    }

    // findOne board
    public BoardEntity findOne(Long id) {
        return em.find(BoardEntity.class, id);
    }

    // findAll board
    public List<BoardEntity> findAll() {
        return em.createQuery("select b from BoardEntity b", BoardEntity.class).getResultList();
    }

    // findByName board
    public List<BoardEntity> findByTitle(String title) {
        return em.createQuery("select b from BoardEntity b where b.title = :title", BoardEntity.class)
                .setParameter("title", title).getResultList();
    }
}
