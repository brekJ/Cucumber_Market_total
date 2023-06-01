package com.example.demo;

import java.util.List;

public interface CustomChatContentRepository {
    public List<ChatContent> findByChatRoomChatRoomID(int roomID);

}
