package com.nocountry.apiS16.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategory;
    @Column(unique = true)
    private String name;
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<CategoryXProduct> categoryXProducts;
}
