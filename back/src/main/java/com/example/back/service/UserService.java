package com.example.back.service;

import com.example.back.entity.User.UserEntity;
import com.example.back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
// @Transactional(readOnly = true) --> optimize performance
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    // create user
    @Transactional
    public Long save(UserEntity userEntity) {
        validateDuplicateUser(userEntity);
        return userRepository.save(userEntity);
    }
    // findAll user
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }
    // findOne user
    public UserEntity findOne(Long id){
        return userRepository.findOne(id);
    }
    // findByName user
    public List<UserEntity> findByName(String name) {
        return userRepository.findByName(name);
    }
    // validate duplicate user
    public void validateDuplicateUser(UserEntity userEntity) {
        List<UserEntity> findUsers = userRepository.findByName(userEntity.getName());
        // dulicate exception
        if(!findUsers.isEmpty()) {
            throw new IllegalStateException("duplicate user");
        }
    }
}
