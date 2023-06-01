package com.example.demo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "POST")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postID;

    @ManyToOne
    @JoinColumn(name = "userTableID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "categoryID")
    private Category category;

    private String postTitle;

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private List<String> postImage;

    private int postCost;

    @Column(columnDefinition = "TEXT")
    private String postContent; // text
    private boolean postDealDone;
    private int townID;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp created;
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updated;
    private int statuss;
}
