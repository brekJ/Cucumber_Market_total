package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    @Query(value = "SELECT * FROM POST WHERE postTitle LIKE CONCAT('%', ?1, '%')", nativeQuery = true)
    List<Post> findByName(String name);
}
