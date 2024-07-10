package com.nocountry.apiS16.controller;

import com.nocountry.apiS16.exceptions.ResourceNotFoundException;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.service.implementations.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {
@Autowired
    private ProductService productService;

    @PostMapping
    public Product createProduct(@RequestBody Product product) throws ResourceNotFoundException {
        return productService.createProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProduct();
    }
    @GetMapping("/name/{name}")
    public Product getProductByName(@PathVariable String name) throws ResourceNotFoundException {
        return productService.getProductByName(name);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,@RequestBody Product product) throws ResourceNotFoundException {
        product.setIdProduct(id);
        return productService.updateProduct(product);
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id) throws ResourceNotFoundException {
        return productService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Long id) throws ResourceNotFoundException {
        productService.deleteProductById(id);
    }

}
