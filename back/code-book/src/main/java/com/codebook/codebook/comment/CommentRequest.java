package com.codebook.codebook.comment;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CommentRequest implements Serializable {

    String codeId;

    String authorId;

    String body;

}