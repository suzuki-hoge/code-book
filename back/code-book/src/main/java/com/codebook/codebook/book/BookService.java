package com.codebook.codebook.book;

import com.codebook.codebook.code.CodeService;
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
public class BookService {

    JdbcTemplate template;

    CodeService codeService;

    public List<Book> findAll() {
        List<Map<String, Object>> kvs = template.queryForList(
            "select * from book join users on book.author_id = users.id"
        );

        return kvs.stream().map(
            kv -> findByBookId((String) kv.get("id"))
        ).collect(Collectors.toList());
    }

    public Book findByBookId(String id) {
        Map<String, Object> kv = template.queryForMap(
            "select * from book join users on book.author_id = users.id where book.id = ?",
            id
        );

        return new Book(
            (String) kv.get("id"),
            (String) kv.get("emoji"),
            (String) kv.get("title"),
            (String) kv.get("description"),
            new User(
                (String) kv.get("author_id"),
                (String) kv.get("name"),
                (String) kv.get("icon")
            ),
            (String) kv.get("created"),
            codeService.findAllByBookId((String) kv.get("id"))
        );
    }

    public String create(BookRequest request) {
        String id = UUID.randomUUID().toString();
        String created = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm:ss"));

        template.update(
            "insert into book (id, author_id, emoji, title, description, created) values (?, ?, ?, ?, ?, ?)",
            id, request.authorId, request.emoji, request.title, request.description, created
        );

        return id;
    }

}
