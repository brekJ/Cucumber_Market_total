package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chatcontents")
public class ChatContentController {
    private final ChatContentService chatContentService;

    @Autowired
    public ChatContentController(ChatContentService chatContentService) {
        this.chatContentService = chatContentService;
    }

    // CRUD endpoints (POST, GET, PUT, DELETE)
    @PostMapping
    public ChatContent create(@ModelAttribute ChatContent chatContent) {
        return chatContentService.save(chatContent);
    }

    @GetMapping
    public List<ChatContent> findAll() {
        return chatContentService.findAll();
    }

    @GetMapping("/{id}")
    public ChatContent findById(@PathVariable int id) {
        return chatContentService.findById(id);
    }

    @PutMapping("/{id}")
    public ChatContent update(@PathVariable int id, @ModelAttribute ChatContent chatContent) {
        chatContent.setChatContentID(id);
        return chatContentService.update(chatContent);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        chatContentService.deleteById(id);
    }
}
