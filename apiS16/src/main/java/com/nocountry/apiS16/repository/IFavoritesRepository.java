package com.nocountry.apiS16.repository;

import com.nocountry.apiS16.dto.FavoritesDTO;
import com.nocountry.apiS16.model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface IFavoritesRepository extends JpaRepository<Favorites, Long> {
    @Query("SELECT f FROM Favorites f WHERE f.users.id_user = :idUser")
List<Favorites​> findByUser(@Param("idUser") Long id_user);
}
