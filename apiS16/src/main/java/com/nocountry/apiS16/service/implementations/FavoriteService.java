package com.nocountry.apiS16.service.implementations;

import com.nocountry.apiS16.dto.FavoritesDTO;
import com.nocountry.apiS16.dto.ProductDTO;
import com.nocountry.apiS16.dto.RequestDTO;
import com.nocountry.apiS16.dto.UserGetDTO;
import com.nocountry.apiS16.exceptions.ObjectNotFoundException;
import com.nocountry.apiS16.model.Favorites;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.model.Users;
import com.nocountry.apiS16.repository.IFavoritesRepository;
import com.nocountry.apiS16.repository.IProductRepository;
import com.nocountry.apiS16.repository.IUserRepository;
import com.nocountry.apiS16.service.interfaces.IFavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FavoriteService implements IFavoriteService {

    private final IFavoritesRepository favoritesRepository;

    private final IUserRepository userRepository;

    private final IProductRepository productRepository;

    private FavoritesDTO convertToDTO(Favorites favorites) {
        return FavoritesDTO.builder()
                .id_favorites(favorites.getId_favorites())
                .user(UserGetDTO.builder()
                        .idUser(favorites.getUsers().getId_user())
                        .name(favorites.getUsers().getName())
                        .lastName(favorites.getUsers().getLastName())
                        .email(favorites.getUsers().getEmail())
                        .birthday(favorites.getUsers().getBirthday())
                        .phoneNumber(favorites.getUsers().getPhoneNumber())
                        .province(favorites.getUsers().getProvince())
                        .socialWorkNumber(favorites.getUsers().getSocialWorkNumber())
                        .disabilityCertificateNumber(favorites.getUsers().getDisabilityCertificateNumber())
                        .build()
                )
                .product(ProductDTO.builder()
                        .idProduct(favorites.getProduct().getIdProduct())
                        .idUser(favorites.getProduct().getUsers().getId_user())
                        .name(favorites.getProduct().getName())
                        .description(favorites.getProduct().getDescription())
                        .creationDate(favorites.getProduct().getCreationDate())
                        .available(favorites.getProduct().isAvailable())
                        .imageURL(favorites.getProduct().getImageURL())
                        .categoryId(favorites.getProduct().getCategory().getIdCategory())
                        .state(favorites.getProduct().getState())
                        .userName(favorites.getProduct().getUsers().getName())
                        .userLastName(favorites.getProduct().getUsers().getLastName())
                        .userEmail(favorites.getProduct().getUsers().getEmail())
                        .userProvince(favorites.getProduct().getUsers().getProvince())
                        .requestList(favorites.getProduct().getRequestList().stream()
                                .map(request -> RequestDTO.builder()
                                .idRequest(request.getIdRequest())
                                .requestDay(request.getRequestDay())
                                .requestCompleted(request.isRequestCompleted())
                                .name(request.getName())
                                .phoneNumber(request.getPhoneNumber())
                                .socialWorkNumber(request.getSocialWorkNumber())
                                .disabilityCertificateNumber(request.getDisabilityCertificateNumber())
                                .build())
                                .collect(Collectors.toList()))
                        .build())
                .build();          
    }

    @Override
    public Favorites saveFavorites(Long id_user, Long id_product) throws ObjectNotFoundException {

        //Buscamos el user por el id
        Optional<Users> users = this.userRepository.findById(id_user);
        //Buscamos el producto por el id
        Optional<Product> product = this.productRepository.findById(id_product);

        if (users.isPresent() && product.isPresent()) {
            Favorites favorites = Favorites.builder()
                    .users(users.get())
                    .product(product.get())
                    .build();

            return this.favoritesRepository.save(favorites);

        } else {
            throw new ObjectNotFoundException("Product or user doesnt found");
        }

    }

    @Override
    public List<FavoritesDTO> getFavorities(Long id_user) {
        List<Favorites> favorites = favoritesRepository.findByUser(id_user);
        return favorites.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public boolean deleteFavorities(Long id) throws ObjectNotFoundException {
        Favorites favoritesDeleted = this.favoritesRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException("Favorities with that id doesnt exist"));

        if (favoritesDeleted != null) {
            this.favoritesRepository.delete(favoritesDeleted);
            return true;
        } else {
            throw new ObjectNotFoundException("Favorities with that id doesnt exist");
        }
    }
}
