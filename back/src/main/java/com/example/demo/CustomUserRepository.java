package com.example.demo;

import java.util.List;

public interface CustomUserRepository {
    public List<User> findByUserID(String userID);

    public List<User> findByUserIDAndPassword(String userID, String password);
}
