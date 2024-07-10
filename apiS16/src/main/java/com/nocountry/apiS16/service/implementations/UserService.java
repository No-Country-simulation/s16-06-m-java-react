package com.nocountry.apiS16.service.implementations;

import com.nocountry.apiS16.dto.UserDTO;
import com.nocountry.apiS16.model.Users;
import com.nocountry.apiS16.repository.IUserRepository;
import com.nocountry.apiS16.service.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final IUserRepository userRepository;

    @Override
    public Users saveUser(UserDTO userDTO) {
         Users userCreated = Users.builder()
                .name(userDTO.getName())
                .lastName(userDTO.getLastName())
                .dni(userDTO.getDni())
                .email(userDTO.getEmail())
                .birthday(userDTO.getBirthday())
                .phoneNumber(userDTO.getPhoneNumber())
                .build();

         return this.userRepository.save(userCreated);
    }

    @Override
    public List<Users> getUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public Users findUserByName(String name) {
        return this.userRepository.getUserByName(name)
                .orElseThrow(()-> new RuntimeException("User with that name doesnt exist"));
    }

    @Override
    public Users findUserByDni(String dni) {
        return this.userRepository.getUserByDni(dni).orElseThrow(()-> new RuntimeException("User with that dni: +"
                + dni + " doesnt exist"));
    }

    @Override
    public Users findUserById(Long idUser) {
        return this.userRepository.findById(idUser).orElseThrow(()-> new RuntimeException("The user with that id: "
                + idUser + " doesnt exist"));
    }

    @Override
    public Users editUser(Long idUser, UserDTO userDTO) {
        Users usersEdited = this.findUserById(idUser);

        usersEdited.setName(userDTO.getName());
        usersEdited.setLastName(userDTO.getLastName());
        usersEdited.setDni(userDTO.getDni());
        usersEdited.setEmail(userDTO.getEmail());
        usersEdited.setBirthday(userDTO.getBirthday());
        usersEdited.setPhoneNumber(userDTO.getPhoneNumber());

        return this.userRepository.save(usersEdited);
    }

    @Override
    public Boolean deleteUser(Long idUser) {
        Users usersDeleted = this.findUserById(idUser);
        if (usersDeleted != null){
            this.userRepository.delete(usersDeleted);
            return true;
        } else {
            return false;
        }
    }
}
