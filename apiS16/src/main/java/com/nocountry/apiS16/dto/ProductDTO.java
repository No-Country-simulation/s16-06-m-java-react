package com.nocountry.apiS16.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
@Getter
@Setter
@Data
@NoArgsConstructor
public class ProductDTO {

    private Long idProduct;
    private String name;
    private Long idUser;
    private String description;
    private Date CreationDate;
    private boolean available;
    private boolean state;
    private Long categoryId;
    private CategoryDTO category;
}
