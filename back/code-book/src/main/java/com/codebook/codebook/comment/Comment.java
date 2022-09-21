package com.codebook.codebook.comment;

import com.codebook.codebook.user.User;
import lombok.Value;

import java.util.Map;

@Value
public class Comment {

    String id;

    String body;

    User author;

    String created;

    public Map<String, Object> toMap() {
        return Map.of("id", id, "body", body, "author", author.toMap(), "created", created);
    }

}
