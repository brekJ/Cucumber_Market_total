package com.example.demo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class CustomChatRoomRepositoryImplement implements CustomChatRoomRepository {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ChatRoom> findBySellerUserUserTableIDOrBuyerUserUserTableID(int sellerID, int buyerID) {
        TypedQuery typedQuery = entityManager.createQuery("SELECT c FROM ChatRoom c WHERE c.sellerUser.userID = :seller OR c.buyerUser.userID = :buyer", ChatRoom.class);
        typedQuery.setParameter("seller", sellerID);
        typedQuery.setParameter("buyer", buyerID);
        List<ChatRoom> list = typedQuery.getResultList();
        return list;
    }

    @Override
    public List<ChatRoom> findByPostAndSellerUserAndBuyerUser(Post post, User seller, User buyer) {
        int postID = post.getPostID();
        String sellerID = seller.getUserID();
        String buyerID = buyer.getUserID();
        TypedQuery typedQuery = entityManager.createQuery("SELECT c FROM ChatRoom c WHERE c.post.postID = :post AND c.sellerUser.userID like :seller AND c.buyerUser.userID like :buyer", ChatRoom.class);
        typedQuery.setParameter("post", postID);
        typedQuery.setParameter("seller", sellerID);
        typedQuery.setParameter("buyer", buyerID);
        List<ChatRoom> list = typedQuery.getResultList();
        return list;
    }
}
