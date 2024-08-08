package com.nocountry.apiS16.service.interfaces;

import com.nocountry.apiS16.dto.CommentsGetDTO;
import com.nocountry.apiS16.model.Comments;

import java.util.List;

public interface ICommentsService {

    public List<Comments> getComments();
    public List<CommentsGetDTO> findComments(Long product_id);
    public Comments saveComments (Long idUser,Long idProduct, String description);
    public Boolean deleteComments(Long id_comments);
}
