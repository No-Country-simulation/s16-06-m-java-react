package com.nocountry.apiS16.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    private String dni;
    private String email;
    private LocalDate birthday;
    @Column(name = "phone_number")
    private String phoneNumber;


    //@OneToMany with products!

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, targetEntity = Comments.class)
    @JsonManagedReference
    private List<Comments> commentsList;

}
