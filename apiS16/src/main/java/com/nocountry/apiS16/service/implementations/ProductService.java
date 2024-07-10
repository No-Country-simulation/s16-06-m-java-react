package com.nocountry.apiS16.service.implementations;
import com.nocountry.apiS16.exceptions.ResourceNotFoundException;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ProductService {
    @Autowired
    private IProductRepository productRepository;

    public Product createProduct(Product producto) throws ResourceNotFoundException {
        if (producto == null) {
            throw new ResourceNotFoundException("Product object cannot be null");
        }
        if (producto.getName() == null || producto.getName().isEmpty()) {
            throw new ResourceNotFoundException("Product name required");
        }
        if (nameAlreadyInUse(producto.getName())) {
            throw new ResourceNotFoundException("A Product with that name already exists in the database");
        }

        return productRepository.save(producto);
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

    public Product updateProduct(Product product) throws ResourceNotFoundException {
        Product existingProduct = productRepository.findById(product.getIdProduct()).orElse(null);
        if (existingProduct != null) {
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            return productRepository.save(existingProduct);
        } else {
            throw new ResourceNotFoundException("Product with ID " + product.getIdProduct() + " not found");
        }
    }

    public void deleteProductById(Long id) throws ResourceNotFoundException {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            productRepository.delete(product.get());
        } else {
            throw new ResourceNotFoundException("There is no product with the id: " + id);
        }

    }

    private boolean nameAlreadyInUse(String name) {
        return productRepository.findByName(name).isPresent();

    }
}

