package com.codebook.codebook.user;

import lombok.Value;

import java.util.Map;

@Value
public class User {

    String id;

    String name;

    String icon;

    public Map<String, Object> toMap() {
        return Map.of("id", id, "name", name, "icon", icon);
    }

}
