package com.example.demo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class CustomChatContentRepositoryImplement implements CustomChatContentRepository {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ChatContent> findByChatRoomChatRoomID(int roomID) {
        TypedQuery typedQuery = entityManager.createQuery("SELECT c FROM ChatContent c WHERE c.chatRoom.chatRoomID = :room", ChatContent.class);
        typedQuery.setParameter("room", roomID);
        List<ChatContent> list = typedQuery.getResultList();
        return list;
    }
}
