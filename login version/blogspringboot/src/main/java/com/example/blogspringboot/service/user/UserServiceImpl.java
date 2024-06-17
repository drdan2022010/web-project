package com.example.blogspringboot.service.user;

import com.example.blogspringboot.dto.SignupDTO;
import com.example.blogspringboot.dto.UserDTO;
import com.example.blogspringboot.entity.User;
import com.example.blogspringboot.enums.UserRole;
import com.example.blogspringboot.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
@PostConstruct
    public void createAdminAccount(){
        User adminAccount = userRepository.findByUserRole(UserRole.ADMIN);
        if (adminAccount == null){
            User user = new User();
            user.setUserRole(UserRole.ADMIN);
            user.setEmail("iugioh@gmail.com");
            user.setName("admin");
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(user);
        }
    }

    @Override
    public UserDTO createUser(SignupDTO signupDTO) {
        User user = new User();
        user.setName(signupDTO.getName());
        user.setEmail(signupDTO.getEmail());
        user.setUserRole(UserRole.USER);
        user.setPassword(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
        User createdUser = userRepository.save(user);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(createdUser.getId());
        userDTO.setName(createdUser.getName());
        userDTO.setEmail(createdUser.getEmail());
        userDTO.setUserRole(createdUser.getUserRole());
        return userDTO;
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email)!=null;
    }
}
