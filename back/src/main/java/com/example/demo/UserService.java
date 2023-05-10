package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // CRUD methods (create, read, update, delete)
    public User save(User user) {
        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User checkUserInfo(String userID, String password) {
        List<User> list = userRepository.findByUserIDAndPassword(userID, password);
        int size = list.size();
        System.out.println(size);
        if (size == 0) {
            return null;
        } else if (size == 1) {
            return list.get(0);
        }
        return null;
    }

    public User checkId(String userID) {
        List<User> list = userRepository.findByUserID(userID);
        int size = list.size();
        System.out.println(size);
        if (size == 0) {
            return null;
        } else if (size == 1) {
            return list.get(0);
        }
        return null;
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public void deleteById(int id) {
        userRepository.deleteById(id);
    }
}
