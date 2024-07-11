package com.nocountry.apiS16.dto;

import com.nocountry.apiS16.model.Category;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

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
    private Category category;
}
