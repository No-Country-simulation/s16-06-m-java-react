package com.nocountry.apiS16.dto;

import com.nocountry.apiS16.model.Category;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
public class ProductDTO {

    private Long idProduct;
    private String name;
    private Long idUser;
    private String description;
    private LocalDateTime CreationDate;
    private boolean available;
    private boolean state;
    private Category category;
}
