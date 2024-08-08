package com.nocountry.apiS16.service.implementations;

import com.nocountry.apiS16.dto.AnswersDTO;
import com.nocountry.apiS16.dto.CommentsGetDTO;
import com.nocountry.apiS16.dto.UserGetDTO;
import com.nocountry.apiS16.model.Comments;
import com.nocountry.apiS16.model.Product;
import com.nocountry.apiS16.model.Users;
import com.nocountry.apiS16.repository.IAnswersRepository;
import com.nocountry.apiS16.repository.ICommentsRepository;
import com.nocountry.apiS16.repository.IProductRepository;
import com.nocountry.apiS16.repository.IUserRepository;
import com.nocountry.apiS16.service.interfaces.ICommentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentsService implements ICommentsService {

    private final ICommentsRepository commentsRepository;

    private final IProductRepository productRepository;

    private final IUserRepository userRepository;
    
    private final IAnswersRepository answerRepository;
    
   private CommentsGetDTO convertToDTO(Comments comments) {
    return CommentsGetDTO.builder()
            .idComments(comments.getId_comments())
            .user(UserGetDTO.builder()
                    .name(comments.getUser().getName())
                    .lastName(comments.getUser().getLastName())
                    .email(comments.getUser().getEmail())
                    .birthday(comments.getUser().getBirthday())
                    .phoneNumber(comments.getUser().getPhoneNumber())
                    .province(comments.getUser().getProvince())
                    .socialWorkNumber(comments.getUser().getSocialWorkNumber())
                    .disabilityCertificateNumber(comments.getUser().getDisabilityCertificateNumber())
                    .build())
            .description(comments.getDescription())
            .creationDate(comments.getCreationDate())
            .answersList(comments.getAnswersList().stream()
                    .map(answer -> AnswersDTO.builder()
                            .completeName(answer.getCompleteName())
                            .content(answer.getContent())
                            .creationDate(answer.getCreationDate())
                            .build())
                    .collect(Collectors.toList()))
            .build();
}
    

    @Override
    public List<Comments> getComments() {
        return this.commentsRepository.findAll();
    }

//    @Override
//    public List<Comments> findComments(Long idProduct) {
//        return commentsRepository.getCommentsByIdProduct(idProduct);
//    }
    @Override
    public List<CommentsGetDTO> findComments(Long idProduct) {
        List<Comments> commentsList = commentsRepository.getCommentsByIdProduct(idProduct);
        return commentsList.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public Comments saveComments(Long idUser, Long idProduct, String description) {
        Optional<Users> users = this.userRepository.findById(idUser);

        Optional<Product> products = this.productRepository.findById(idProduct);

        if (users.isPresent() && products.isPresent()) {
            Comments comments = Comments.builder()
                    .description(description)
                    .creationDate(LocalDate.now())
                    .user(users.get())
                    .product(products.get())
                    .build();
            return this.commentsRepository.save(comments);

        } else {
            throw new RuntimeException("User or Product doesnt found");
        }
    }

    @Override
    public Boolean deleteComments(Long id_comments) {
        Optional<Comments> commentOptional = this.commentsRepository.findById(id_comments);

        if (commentOptional.isPresent()) {
            this.commentsRepository.deleteById(id_comments);
            return true;
        } else {
            throw new RuntimeException("Comment with that id doesn't exist");
        }
    }

    
}

