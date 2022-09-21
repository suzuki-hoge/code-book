package com.codebook.codebook.comment;

import com.codebook.codebook.user.User;
import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Value
@Service
public class CommentService {

    JdbcTemplate template;

    public List<Comment> findByCodeId(String id) {
        List<Map<String, Object>> kvs = template.queryForList(
            "select * from comment join users on comment.author_id = users.id where code_id = ?",
            id
        );

        return kvs.stream().map(
            kv -> new Comment(
                (String) kv.get("id"),
                (String) kv.get("body"),
                new User(
                    (String) kv.get("author_id"),
                    (String) kv.get("name"),
                    (String) kv.get("icon")
                ),
                (String) kv.get("created")
            )
        ).collect(Collectors.toList());
    }

}
