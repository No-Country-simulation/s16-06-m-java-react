package com.nocountry.apiS16.repository;

import com.nocountry.apiS16.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
