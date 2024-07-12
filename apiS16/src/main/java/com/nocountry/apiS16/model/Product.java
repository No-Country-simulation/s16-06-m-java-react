package com.nocountry.apiS16.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduct;

    @Column(unique = true)
    private String name;

    @Column(name = "id_user")
    private Long idUser;

    private String description;

    @Column(name = "creation_date")
    private Date CreationDate;

    private boolean available;
    private boolean state;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
