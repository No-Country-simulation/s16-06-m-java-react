package com.nocountry.apiS16.service.implementations;
import com.nocountry.apiS16.dto.ProductDTO;
import com.nocountry.apiS16.exceptions.ResourceNotFoundException;
import com.nocountry.apiS16.model.Category;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.repository.ICategoryRepository;
import com.nocountry.apiS16.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ProductService {
    @Autowired
    private IProductRepository productRepository;

    private ICategoryRepository iCategoryRepository;

    public Product createProduct(ProductDTO productDTO) throws ResourceNotFoundException {
        if (productDTO == null) {
            throw new IllegalArgumentException("ProductDTO object cannot be null");
        }
        if (productDTO.getName() == null || productDTO.getName().isEmpty()) {
            throw new ResourceNotFoundException("Product name required");
        }

        Category category = iCategoryRepository.findById(productDTO.getCategory().getIdCategory())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + productDTO.getCategory().getIdCategory()));

        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setCreationDate(productDTO.getCreationDate());
        product.setAvailable(productDTO.isAvailable());
        product.setState(productDTO.isState());
        product.setCategory(category);

        return productRepository.save(product);

    }

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) throws ResourceNotFoundException {
        Product product = productRepository.findById(id).orElse(null);
        if (product == null) {
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }
        return product;
    }

    public Product getProductByName(String name) throws ResourceNotFoundException {
        Product product = productRepository.findByName(name).orElse(null);
        if (product == null) {
            throw new ResourceNotFoundException("Product not found with id: " + name);
        }
        return product;
    }

    public Product updateProduct(Long id, ProductDTO productDTO) throws  ResourceNotFoundException{
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        Category category = iCategoryRepository.findById(productDTO.getCategory().getIdCategory())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + productDTO.getCategory().getIdCategory()));

        existingProduct.setName(productDTO.getName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setCreationDate(productDTO.getCreationDate());
        existingProduct.setAvailable(productDTO.isAvailable());
        existingProduct.setState(productDTO.isState());
        existingProduct.setCategory(category);

        return productRepository.save(existingProduct);
    }

    public void deleteProductById(Long id) throws ResourceNotFoundException {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            productRepository.delete(product.get());
        } else {
            throw new ResourceNotFoundException("There is no product with the id: " + id);
        }

    }

}

