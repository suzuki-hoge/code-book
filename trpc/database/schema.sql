drop table if exists theme;
create table theme
(
    id        string primary key,
    title     text,
    created   text,
    author_id text
);

drop table if exists comment;
create table comment
(
    id        string primary key,
    theme_id  string,
    body      text,
    created   text,
    author_id text
);

drop table if exists user;
create table user
(
    id   string primary key,
    name text,
    icon text
);
