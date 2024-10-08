package com.nocountry.apiS16.dto;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;
import java.io.Serializable;

import java.time.LocalDate;
import lombok.Builder;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Validated
@Builder
public class UserDTO implements Serializable {


    @Size(min = 3)
    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Last Name is required")
    private String lastName;

    @Size(min = 8, message = "min 8 characters") //44 123 321
    private String dni;

    @Email(message = "Email valid is required")
    @NotNull(message = "Email valid is required")
    private String email;

    @Size(min = 8, message = "min 8 characters")
    @NotBlank
    private String password;

    @Past
    private LocalDate birthday;


    @Size(min = 10, max = 11, message = "Min 10 and max 11 characters") //3571416413
    private String phoneNumber;

    @NotBlank(message = "Increase a Province please!")
    private String province;

    private String photoUser;

    private Long socialWorkNumber;

    private Long disabilityCertificateNumber;

    @Size(min = 8)
    private String repeatedPassword;
}
