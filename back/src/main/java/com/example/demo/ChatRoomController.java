package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chatrooms")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @Autowired
    public ChatRoomController(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    // CRUD endpoints (POST, GET, PUT, DELETE)
    @PostMapping
    public ChatRoom create(@ModelAttribute ChatRoom chatRoom) {
        return chatRoomService.save(chatRoom);
    }

    @GetMapping
    public List<ChatRoom> findAll() {
        return chatRoomService.findAll();
    }

    @GetMapping("/{id}")
    public ChatRoom findById(@PathVariable int id) {
        return chatRoomService.findById(id);
    }

    @PutMapping("/{id}")
    public ChatRoom update(@PathVariable int id, @ModelAttribute ChatRoom chatRoom) {
        chatRoom.setChatRoomID(id);
        return chatRoomService.update(chatRoom);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        chatRoomService.deleteById(id);
    }
}
