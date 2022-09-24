package com.codebook.codebook.code;

import com.codebook.codebook.comment.CommentService;
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
public class CodeService {

    JdbcTemplate template;

    CommentService commentService;

    CodePartService codePartService;

    public List<Code> findAllByBookId(String id) {
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
                commentService.findAllByCodeId((String) kv.get("id")),
                codePartService.findByCodeId((String) kv.get("id"))
            )
        ).collect(Collectors.toList());
    }

    public Code findById(String id) {
        Map<String, Object> kv = template.queryForMap(
            "select * from code join users on code.author_id = users.id where code.id = ?",
            id
        );

        return new Code(
            (String) kv.get("id"),
            (String) kv.get("title"),
            new User(
                (String) kv.get("author_id"),
                (String) kv.get("name"),
                (String) kv.get("icon")
            ),
            (String) kv.get("created"),
            commentService.findAllByCodeId((String) kv.get("id")),
            codePartService.findByCodeId((String) kv.get("id"))
        );
    }

    public String create(CodeRequest request) {
        String id = UUID.randomUUID().toString();
        String created = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm:ss"));

        template.update(
            "insert into code (id, book_id, author_id, title, created) values (?, ?, ?, ?, ?)",
            id, request.bookId, request.authorId, request.title, created
        );

        //@formatter:off
        if (request.kind.equals("url")) {
            template.update(
                "insert into code_part (code_id, kind, val0, tag0, tag1, tag2, tag3, tag4) values (?, ?, ?, ?, ?, ?, ?, ?)",
                id, request.kind, request.val(0), request.tag(0), request.tag(1), request.tag(2), request.tag(3), request.tag(4)
            );
        } else {
            String tag0, tag1, tag2, tag3, tag4;
            if (request.kind.equals("file")) {
                tag0 = request.val(0).equals("") ? "" : request.val(0).split("\\.")[1];
                tag1 = request.val(2).equals("") ? "" : request.val(2).split("\\.")[1];
                tag2 = request.val(4).equals("") ? "" : request.val(4).split("\\.")[1];
                tag3 = request.val(6).equals("") ? "" : request.val(6).split("\\.")[1];
                tag4 = request.val(8).equals("") ? "" : request.val(8).split("\\.")[1];
            } else {
                tag0 = request.val(0).equals("") ? "" : request.val(0).split("\\.")[1];
                tag1 = "";
                tag2 = "";
                tag3 = "";
                tag4 = "";
            }
            template.update(
                "insert into code_part (code_id, kind, val0, val1, val2, val3, val4, val5, val6, val7, val8, val9, tag0, tag1, tag2, tag3, tag4) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                id, request.kind, request.val(0), request.val(1), request.val(2), request.val(3),
                request.val(4), request.val(5), request.val(6), request.val(7), request.val(8), request.val(9),
                tag0, tag1, tag2, tag3, tag4
            );
        }

        return id;

    }
}
