package com.codebook.codebook.code;

import lombok.Value;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Value
public class CodePart {

    String kind;

    String val0;

    String val1;

    String val2;

    String val3;

    String val4;

    String val5;

    String val6;

    String val7;

    String val8;

    String val9;

    String tagName0;

    String tagName1;

    String tagName2;

    String tagName3;

    String tagName4;

    String tagIcon0;

    String tagIcon1;

    String tagIcon2;

    String tagIcon3;

    String tagIcon4;

    public List<Map<String, String>> getTags() {
        return Stream.of(
            Map.of("name", tagName0, "icon", tagIcon0),
            Map.of("name", tagName1, "icon", tagIcon1),
            Map.of("name", tagName2, "icon", tagIcon2),
            Map.of("name", tagName3, "icon", tagIcon3),
            Map.of("name", tagName4, "icon", tagIcon4)
        ).filter(m -> !m.get("name").equals("")).collect(Collectors.toList());
    }

    public Map<String, Object> toMap() {
        if (kind.equals("file")) {
            return Map.of(
                "kind", kind,
                "files", Stream.of(
                    Map.of("name", val0, "text", val1),
                    Map.of("name", val2, "text", val3),
                    Map.of("name", val4, "text", val5),
                    Map.of("name", val6, "text", val7),
                    Map.of("name", val8, "text", val9)
                ).filter(m -> !m.get("name").equals("")).collect(Collectors.toList())
            );
        } else if (kind.equals("url")) {
            return Map.of("kind", kind, "url", val0);
        } else {
            return Map.of(
                "kind", kind,
                "file", Map.of("name", val0, "text", val1),
                "variables", Stream.of(
                    Map.of("name", val2, "value", val3),
                    Map.of("name", val4, "value", val5),
                    Map.of("name", val6, "value", val7),
                    Map.of("name", val8, "value", val9)
                ).filter(m -> !m.get("name").equals("")).collect(Collectors.toList())
            );
        }
    }

}
