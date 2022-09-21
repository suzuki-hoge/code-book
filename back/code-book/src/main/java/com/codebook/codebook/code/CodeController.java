package com.codebook.codebook.code;

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
public class CodeController {

    JdbcTemplate template;

    CodeService codeService;

    @GetMapping("/codes/{book_id}")
    public List<Map<String, Object>> findAll(@PathVariable("book_id") String bookId) {
        return codeService.findAllByBookId(bookId).stream().map(Code::toMap).collect(Collectors.toList());
    }

    @GetMapping("/code/{code_id}")
    public Map<String, Object> findOne(@PathVariable("code_id") String codeId) {
        return codeService.findById(codeId).toMap();
    }

}
