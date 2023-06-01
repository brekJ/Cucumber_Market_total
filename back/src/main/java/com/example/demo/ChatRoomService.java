package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        List<ChatRoom> list = chatRoomRepository.findByPostAndSellerUserAndBuyerUser(chatRoom.getPost(), chatRoom.getSellerUser(), chatRoom.getBuyerUser());
        int size = list.size();

        if (size == 0) {
            return chatRoomRepository.save(chatRoom);
        } else {
            return list.get(0);
        }
    }

    public List<ChatRoom> findAllByUserTableID(int id) {
        return chatRoomRepository.findBySellerUserUserTableIDOrBuyerUserUserTableID(id, id);
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
