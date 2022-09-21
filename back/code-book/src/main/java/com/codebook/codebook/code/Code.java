package com.codebook.codebook.code;

import com.codebook.codebook.comment.Comment;
import com.codebook.codebook.user.User;
import lombok.Value;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Value
public class Code {

    String id;

    String title;

    User author;

    String created;

    List<Comment> comments;

    CodePart part;

    public Map<String, Object> toMap() {
        return Map.of(
            "id", id,
            "title", title,
            "author", author.toMap(),
            "created", created,
            "part", part.toMap(),
            "tags", part.getTags(),
            "comments", comments.stream().map(Comment::toMap).collect(Collectors.toList())
        );
    }

}
