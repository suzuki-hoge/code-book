package com.codebook.codebook.code;

import lombok.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Value
@Service
public class CodePartService {

    JdbcTemplate template;

    public CodePart findByCodeId(String id) {
        Map<String, Object> kv = template.queryForMap(
            "select * from code_part where code_id = ?",
            id
        );

        return new CodePart(
            (String) kv.get("kind"),
            (String) kv.get("val0"),
            (String) kv.get("val1"),
            (String) kv.get("val2"),
            (String) kv.get("val3"),
            (String) kv.get("val4"),
            (String) kv.get("val5"),
            (String) kv.get("val6"),
            (String) kv.get("val7"),
            (String) kv.get("val8"),
            (String) kv.get("val9"),
            (String) kv.get("tag0"),
            (String) kv.get("tag1"),
            (String) kv.get("tag2"),
            (String) kv.get("tag3"),
            (String) kv.get("tag4"),
            kv.get("tag0").equals("")
            ? ""
            : (String) template.queryForMap("select * from tag where name = ?", kv.get("tag0")).get("icon"),
            kv.get("tag1").equals("")
            ? ""
            : (String) template.queryForMap("select * from tag where name = ?", kv.get("tag1")).get("icon"),
            kv.get("tag2").equals("")
            ? ""
            : (String) template.queryForMap("select * from tag where name = ?", kv.get("tag2")).get("icon"),
            kv.get("tag3").equals("")
            ? ""
            : (String) template.queryForMap("select * from tag where name = ?", kv.get("tag3")).get("icon"),
            kv.get("tag4").equals("")
            ? ""
            : (String) template.queryForMap("select * from tag where name = ?", kv.get("tag4")).get("icon")
        );
    }

}
