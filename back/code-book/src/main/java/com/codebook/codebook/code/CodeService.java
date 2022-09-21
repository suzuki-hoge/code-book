package com.codebook.codebook.code;

import com.codebook.codebook.comment.CommentService;
import com.codebook.codebook.user.User;
import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Value
@Service
public class CodeService {

    JdbcTemplate template;

    CommentService commentService;

    CodePartService codePartService;

    public List<Code> findByBookId(String id) {
        List<Map<String, Object>> kvs = template.queryForList(
            "select * from code join users on code.author_id = users.id where book_id = ?",
            id
        );

        return kvs.stream().map(
            kv -> new Code(
                (String) kv.get("id"),
                (String) kv.get("title"),
                new User(
                    (String) kv.get("author_id"),
                    (String) kv.get("name"),
                    (String) kv.get("icon")
                ),
                (String) kv.get("created"),
                commentService.findByCodeId((String) kv.get("id")),
                codePartService.findByCodeId((String) kv.get("id"))
            )
        ).collect(Collectors.toList());
    }

}
