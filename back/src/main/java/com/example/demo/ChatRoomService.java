package com.example.demo;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
@Transactional
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;

    @Autowired
    public ChatRoomService(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    // CRUD methods (create, read, update, delete)
    public ChatRoom save(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }

    public List<ChatRoom> findAll() {
        return chatRoomRepository.findAll();
    }

    public ChatRoom findById(int id) {
        return chatRoomRepository.findById(id).orElse(null);
    }

    public ChatRoom update(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }

    public void deleteById(int id) {
        chatRoomRepository.deleteById(id);
    }
}
