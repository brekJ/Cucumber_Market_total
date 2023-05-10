package com.example.demo;

import lombok.*;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CHATCONTENT")
public class ChatContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chatContentID;

    @ManyToOne
    @JoinColumn(name = "ChatRoomID")
    private ChatRoom chatRoom;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User user;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Lob
    @Column(columnDefinition="BLOB")
    private byte[] chatImage;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp created;
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updated;

    private int statuss;
}

