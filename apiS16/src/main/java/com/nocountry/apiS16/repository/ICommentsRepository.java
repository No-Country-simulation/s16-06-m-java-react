package com.nocountry.apiS16.repository;

import com.nocountry.apiS16.model.Comments;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ICommentsRepository extends JpaRepository<Comments, Long> {

    @Query("SELECT c FROM Comments c WHERE c.product.idProduct = :idProduct")
    List<Comments> getCommentsByIdProduct(@Param("idProduct") Long idProduct);
}
