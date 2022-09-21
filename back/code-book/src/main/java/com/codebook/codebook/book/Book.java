package com.codebook.codebook.book;

import com.codebook.codebook.code.Code;
import com.codebook.codebook.user.User;
import lombok.Value;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Value
public class Book {

    String id;

    String emoji;

    String title;

    String description;

    User author;

    String created;

    List<Code> codes;

    public Map<String, Object> toMap() {
        return Map.of(
            "book", Map.of(
                "id", id,
                "emoji", emoji,
                "title", title,
                "description", description,
                "author", author.toMap(),
                "tags", codes.stream().flatMap(c -> c.getPart().getTags().stream()).distinct().collect(Collectors.toList()),
                "created", created,
                "codes", codes.stream().map(Code::toMap).collect(Collectors.toList())
            )
        );
    }

}
