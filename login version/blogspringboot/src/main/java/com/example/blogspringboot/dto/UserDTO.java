package com.example.blogspringboot.dto;

import com.example.blogspringboot.enums.UserRole;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;

    private UserRole userRole;


}
