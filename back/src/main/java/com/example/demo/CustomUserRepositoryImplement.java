package com.example.demo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class CustomUserRepositoryImplement implements CustomUserRepository {
    @Autowired
    EntityManager entityManager;

    @Override
    public List<User> findByUserID(String userID) {
        TypedQuery typedQuery = entityManager.createQuery("SELECT u FROM User u WHERE u.userID like :id", User.class);
        typedQuery.setParameter("id", userID);
        List<User> list = typedQuery.getResultList();
        System.out.println("id : " + userID);
        return list;
    }

    @Override
    public List<User> findByUserIDAndPassword(String userID, String password) {
        TypedQuery typedQuery = entityManager.createQuery("SELECT u FROM User u WHERE (u.userID like :id AND u.password like :password)", User.class);
        typedQuery.setParameter("id", userID);
        typedQuery.setParameter("password", password);
        List<User> list = typedQuery.getResultList();
        System.out.println("id : " + userID + " password : " + password);
        return list;
    }
}
