package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ChatContentService {
    private final ChatContentRepository chatContentRepository;

    @Autowired
    public ChatContentService(ChatContentRepository chatContentRepository) {
        this.chatContentRepository = chatContentRepository;
    }

    // CRUD methods (create, read, update, delete)
    public ChatContent save(ChatContent chatContent) {
        return chatContentRepository.save(chatContent);
    }

    public List<ChatContent> findByChatRoomChatRoomID(int roomID) {
        return chatContentRepository.findByChatRoomChatRoomID(roomID);
    }

    public ChatContent findById(int id) {
        return chatContentRepository.findById(id).orElse(null);
    }

    public ChatContent update(ChatContent chatContent) {
        return chatContentRepository.save(chatContent);
    }

    public void deleteById(int id) {
        chatContentRepository.deleteById(id);
    }
}
