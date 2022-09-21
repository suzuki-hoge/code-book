package com.codebook.codebook.book;

import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Value
@RestController
public class BookController {

    JdbcTemplate template;

    BookService bookService;

    @GetMapping("/books")
    public List<Map<String, Object>> findAll() {
        return bookService.findAll().stream().map(Book::toMap).collect(Collectors.toList());
    }

    @GetMapping("/book/{book_id}")
    public Map<String, Object> findOne(@PathVariable("book_id") String bookId) {
        return bookService.findByBookId(bookId).toMap();
    }

}
