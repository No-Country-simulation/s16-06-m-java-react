package com.nocountry.apiS16.dto;

import com.nocountry.apiS16.model.Category;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
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
}
