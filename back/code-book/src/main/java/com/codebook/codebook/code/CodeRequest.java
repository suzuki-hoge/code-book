package com.codebook.codebook.code;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CodeRequest implements Serializable {

    String bookId;

    String authorId;

    String title;

    String kind;

    List<String> vals = new ArrayList<>();

    List<String> tags = new ArrayList<>();

    public String val(int n) {
        return n < vals.size() ? vals.get(n) : "";
    }

    public String tag(int n) {
        return n < tags.size() ? tags.get(n) : "";
    }

}