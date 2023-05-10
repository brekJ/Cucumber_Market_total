package com.example.demo;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CATEGORY")
public class Category {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryID;
    private String categoryGroup;
    private String categoryName;
    private int categoryLevel;
    private Integer categoryParent;
}
