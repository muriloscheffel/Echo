package com.scheffel.Echo.entity.user;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

public enum UserRole {
    ADMIN("admin"),
    USER("user");

    private String role;

    UserRole(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}