package com.nocountry.apiS16.service.implementations;

import com.nocountry.apiS16.model.Category;
import com.nocountry.apiS16.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;

    public List<Category> findAll() {
        return iCategoryRepository.findAll();
    }

    public Category findById(Long id) {
        return iCategoryRepository.findById(id).orElse(null);
    }

    public Category save(Category category) {
        return iCategoryRepository.save(category);
    }

    public void deleteById(Long id) {
        iCategoryRepository.deleteById(id);
    }

    public Category findByName(String name) {
        return iCategoryRepository.findByName(name).orElse(null);
    }
}

