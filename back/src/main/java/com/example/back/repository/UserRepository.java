package com.example.back.repository;
import com.example.back.entity.User.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepository {
    private final EntityManager em;

    // save user
    public Long save(UserEntity userEntity) {
        em.persist(userEntity);
        return userEntity.getId();
    }
    // findOne user
    public UserEntity findOne (Long id) {
        return em.find(UserEntity.class, id);
    }
    // findAll user
    public List<UserEntity> findAll () {
        return em.createQuery("select u from UserEntity where Board u", UserEntity.class)
                .getResultList();
    }
    // findByName user
    public List<UserEntity> findByName (String name) {
        return em.createQuery("select u from UserEntity where u.name = :name", UserEntity.class)
                .setParameter("name", name)
                .getResultList();
    }
}
