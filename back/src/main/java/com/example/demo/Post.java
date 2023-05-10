package com.example.demo;
import lombok.*;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

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

    @Lob
    @Column(columnDefinition="BLOB")
    private byte[] postImage;

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
