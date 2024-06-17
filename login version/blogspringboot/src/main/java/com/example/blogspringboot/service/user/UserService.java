package com.example.blogspringboot.service.user;

import com.example.blogspringboot.dto.SignupDTO;
import com.example.blogspringboot.dto.UserDTO;

public interface UserService {
    UserDTO createUser(SignupDTO signupDTO);

    boolean hasUserWithEmail(String email);
}
