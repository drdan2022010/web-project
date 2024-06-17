package com.example.blogspringboot.repository;

import com.example.blogspringboot.entity.User;
import com.example.blogspringboot.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findFirstByEmail(String email);

    User findByUserRole(UserRole admin);
}
