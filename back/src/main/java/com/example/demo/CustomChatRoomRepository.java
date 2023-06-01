package com.example.demo;

import java.util.List;

public interface CustomChatRoomRepository {

    public List<ChatRoom> findBySellerUserUserTableIDOrBuyerUserUserTableID(int sellerID, int buyerID);

    public List<ChatRoom> findByPostAndSellerUserAndBuyerUser(Post post, User seller, User buyer);
}
