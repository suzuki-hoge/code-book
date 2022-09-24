package com.codebook.codebook.user;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserRequest implements Serializable {

    private String emoji;
    private String title;
    private String description;
    private User author;

}