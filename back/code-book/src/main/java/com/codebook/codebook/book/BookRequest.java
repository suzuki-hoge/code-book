package com.codebook.codebook.book;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class BookRequest implements Serializable {

    String emoji;

    String title;

    String description;

    String authorId;

}