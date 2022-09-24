package com.codebook.codebook.comment;

import com.codebook.codebook.user.User;
import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Value
@Service
public class CommentService {

    JdbcTemplate template;

    public List<Comment> findAllByCodeId(String id) {
        List<Map<String, Object>> kvs = template.queryForList(
            "select * from comment left outer join users on comment.author_id = users.id where code_id = ?",
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

    public String create(CommentRequest request) {
        String id = UUID.randomUUID().toString();
        String created = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm:ss"));

        template.update(
            "insert into comment (id, code_id, author_id, body, created) values (?, ?, ?, ?, ?)",
            id, request.codeId, request.authorId, request.body, created
        );

        return id;
    }

}
