package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatContentRepository extends JpaRepository<ChatContent, Integer> {
}
