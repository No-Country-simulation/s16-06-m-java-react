package com.nocountry.apiS16.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import lombok.Builder;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FavoritesDTO implements Serializable {
    private Long id_favorites;
    private UserGetDTO user;
    private ProductDTO product;
}
