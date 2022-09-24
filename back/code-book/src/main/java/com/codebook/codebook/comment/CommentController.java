package com.codebook.codebook.comment;

import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Value
@RestController
public class CommentController {

    JdbcTemplate template;

    CommentService commentService;

    @PostMapping("/comment")
    public Map<String, String> create(@RequestBody CommentRequest request) {
        return Map.of("id", commentService.create(request));
    }

}
