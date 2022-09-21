drop table if exists book;
create table book
(
    id          varchar(36)   not null primary key,
    author_id   varchar(36)   not null,
    emoji       varchar(4)    not null,
    title       varchar(256)  not null,
    description varchar(4096) not null,
    created     varchar(19)   not null
);

drop table if exists code;
create table code
(
    id        varchar(36)  not null primary key,
    book_id   varchar(36)  not null,
    author_id varchar(36)  not null,
    title     varchar(256) not null,
    created   varchar(19)  not null
);

drop table if exists code_part;
create table code_part
(
    code_id varchar(36) not null,
    kind    varchar(8)  not null,
    val0    varchar(256)  not null default '',
    val1    varchar(4096) not null default '',
    val2    varchar(256)  not null default '',
    val3    varchar(4096) not null default '',
    val4    varchar(256)  not null default '',
    val5    varchar(4096) not null default '',
    val6    varchar(256)  not null default '',
    val7    varchar(4096) not null default '',
    val8    varchar(256)  not null default '',
    val9    varchar(4096) not null default '',
    tag0    varchar(36)   not null default '',
    tag1    varchar(36)   not null default '',
    tag2    varchar(36)   not null default '',
    tag3    varchar(36)   not null default '',
    tag4    varchar(36)   not null default ''
);

drop table if exists comment;
create table comment
(
    id        varchar(36)   not null primary key,
    code_id   varchar(36)   not null,
    author_id varchar(36)   not null,
    body      varchar(4096) not null,
    created   varchar(19)   not null
);

drop table if exists users;
create table users
(
    id   varchar(36)   not null primary key,
    name varchar(36)   not null,
    icon varchar(2048) not null
);

drop table if exists tag;
create table tag
(
    name varchar(36)   not null primary key,
    icon varchar(2048) not null
);
