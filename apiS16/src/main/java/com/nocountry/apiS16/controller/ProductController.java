package com.nocountry.apiS16.controller;

import com.nocountry.apiS16.dto.ProductDTO;
import com.nocountry.apiS16.dto.ProductGetDTO;
import com.nocountry.apiS16.exceptions.ResourceNotFoundException;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.service.implementations.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @PostMapping("/add")
    public ProductGetDTO createProduct(@RequestBody ProductDTO productDTO) throws ResourceNotFoundException {
        Product createdProduct = productService.createProduct(productDTO);
        return productService.convertToProductDTO(createdProduct);
    }

    @GetMapping("/get")
    public List<ProductGetDTO> getAllProducts() {
        List<ProductGetDTO> productDTOs = productService.getAllProductDTOs();
        if (productDTOs.isEmpty()) {
            return new ArrayList<>();
        }
        return productDTOs;

    }

    @GetMapping("/get/name/{name}")
    public ProductGetDTO getProductByName(@PathVariable String name) throws ResourceNotFoundException {
        return productService.getProductByName(name);
    }

    @PutMapping("/{id}")
    public ProductGetDTO updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) throws ResourceNotFoundException{
        Product updatedProduct = productService.updateProduct(id, productDTO);
        return productService.convertToProductDTO(updatedProduct);
    }

    @GetMapping("/{id}")
    public ProductGetDTO getProductById(@PathVariable Long id) throws ResourceNotFoundException {
        return productService.getProductById(id); // Retorna directamente el ProductDTO
    }
//    public ProductDTO getProductById(@PathVariable Long id) throws ResourceNotFoundException {
//        ProductDTO productDTO = productService.getProductById(id);
//        if (productDTO == null) {
//            throw new ResourceNotFoundException("Product not found with id: " + id);
//        }
//        return productDTO;
//    }


    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Long id) throws ResourceNotFoundException {
        productService.deleteProductById(id);
    }

}
