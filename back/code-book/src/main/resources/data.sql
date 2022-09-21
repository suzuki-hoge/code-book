-- book

truncate table book;

insert into book(id, author_id, emoji, title, description, created)
values ('11111111-1111-4111-8111-111111111111', '11111111-1111-4111-8211-111111111111', '🖼', 'フロントコード集', 'フロントエンドのいつか使うコードたち ( 随時追加 )', '2022/09/15 12:51:36');

insert into book(id, author_id, emoji, title, description, created)
values ('22222222-2222-4222-8222-222222222222', '22222222-2222-4222-8222-222222222222', '⛳', '022 - Cubic Cake', 'https://atcoder.jp/contests/typical90/tasks/typical90_v', '2022/09/08 16:01:43');

insert into book(id, author_id, emoji, title, description, created)
values ('33333333-3333-4333-8333-333333333333', '33333333-3333-4333-8233-333333333333', '🗒️', 'プロジェクトのスニペット', '', '2022/08/25 17:33:24');

-- code

truncate table code;

insert into code(id, book_id, author_id, title, created)
values ('11111111-1111-4111-9111-111111111111', '11111111-1111-4111-8111-111111111111', '11111111-1111-4111-8211-111111111111', 'アコーディオンの実装', '2022/09/15 13:01:05');

insert into code(id, book_id, author_id, title, created)
values ('22222222-2222-4222-9222-222222222222', '11111111-1111-4111-8111-111111111111', '11111111-1111-4111-8211-111111111111', 'YouTube の埋め込み', '2022/09/15 15:27:50');

insert into code(id, book_id, author_id, title, created)
values ('33333333-3333-4333-9333-333333333333', '22222222-2222-4222-8222-222222222222', '44444444-4444-4444-8244-444444444444', '提出 #34717162', '2022/09/08 20:03:47');

insert into code(id, book_id, author_id, title, created)
values ('44444444-4444-4444-9444-444444444444', '22222222-2222-4222-8222-222222222222', '55555555-5555-4555-8255-555555555555', '提出 #34717162', '2022/09/10 14:22:32');

insert into code(id, book_id, author_id, title, created)
values ('55555555-5555-4555-9555-555555555555', '22222222-2222-4222-8222-222222222222', '66666666-6666-4666-8266-666666666666', '提出 #34855947', '2022/09/14 21:50:20');

insert into code(id, book_id, author_id, title, created)
values ('66666666-6666-4666-9666-666666666666', '33333333-3333-4333-8333-333333333333', '33333333-3333-4333-8233-333333333333', 'テストデータを消すクエリ', '2022/08/27 11:25:47');

-- code part

truncate table code_part;

insert into code_part(code_id, kind, val0, val1, val2, val3, tag0, tag1)
values ('11111111-1111-4111-9111-111111111111', 'file', 'index.js', STRINGDECODE('const menu = document.querySelectorAll(".js-menu");\n\nfunction toggle() {\n    const content = this.nextElementSibling;\n    this.classList.toggle("is-active");\n    content.classList.toggle("is-open");\n}\n\nfor (let i = 0; i < menu.length; i++) {\n    menu[i].addEventListener("click", toggle);\n}'), 'index.css', STRINGDECODE('* {\n  margin: 0;\n  padding: 0;\n}\nsection {\n  margin-top: 30px;\n}\n.accordion {\n  width: 200px;\n  margin: 0 auto;\n}\n.menu {\n  background-color: purple;\n  color: white;\n  font-size: 18px;\n  padding: 10px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n}\n.menu:hover,\n.menu:active,\n.menu.is-active {\n  background-color: black;\n}\n.contents {\n  text-align: center;\n  line-height: 0;\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition-duration: 0.4s;\n}\n.contents.is-open {\n  border: 1px solid black;\n  padding: 10px;\n  line-height: normal;\n  height: auto;\n  opacity: 1;\n}'), 'js', 'css');

insert into code_part(code_id, kind, val0, tag0, tag1, tag2)
values ('22222222-2222-4222-9222-222222222222', 'url', 'https://codepen.io/scottshefler/pen/XdGbQZ?editors=1111', 'html', 'js', 'css');

insert into code_part(code_id, kind, val0, tag0)
values ('33333333-3333-4333-9333-333333333333', 'url', 'https://atcoder.jp/contests/typical90/submissions/34690959', 'rs');

insert into code_part(code_id, kind, val0, tag0)
values ('44444444-4444-4444-9444-444444444444', 'url', 'https://atcoder.jp/contests/typical90/submissions/34717162', 'fs');

insert into code_part(code_id, kind, val0, tag0)
values ('55555555-5555-4555-9555-555555555555', 'url', 'https://atcoder.jp/contests/typical90/submissions/34855947', 'hs');

insert into code_part(code_id, kind, val0, val1, val2, val3, val4, val5, tag0)
values ('66666666-6666-4666-9666-666666666666', 'snippet', 'delete.sql', STRINGDECODE('delete status\nwhere status.user_id in ( $user_id$ )\nand plan = "$plan$";\n\ndelete item\nfrom item\njoin foo on foo.id = item.foo_id\nwhere foo.user_id in ( $user_id$ );\n\ndelete foo\nwhere user_id in ( $user_id$ );'), 'user_id', '', 'plan', 'active', 'sql');

-- comment

truncate table comment;

insert into comment(id, code_id, author_id, body, created)
values ('11111111-1111-4111-a111-111111111111', '22222222-2222-4222-9222-222222222222', '11111111-1111-4111-8211-111111111111', '埋め込み URL は YouTube で普通に作れる', '2022/09/15 13:03:50');

insert into comment(id, code_id, author_id, body, created)
values ('22222222-2222-4222-a222-222222222222', '33333333-3333-4333-9333-333333333333', '55555555-5555-4555-8255-555555555555', '速い！', '2022/09/15 15:33:11');

insert into comment(id, code_id, author_id, body, created)
values ('33333333-3333-4333-a333-333333333333', '44444444-4444-4444-9444-444444444444', '55555555-5555-4555-8255-555555555555', 'gcd は昔実装したやつのコピペ', '2022/09/15 15:33:11');

insert into comment(id, code_id, author_id, body, created)
values ('44444444-4444-4444-a444-444444444444', '44444444-4444-4444-9444-444444444444', '66666666-6666-4666-8666-666666666666', 'つまりワンライナ', '2022/09/15 15:33:11');

insert into comment(id, code_id, author_id, body, created)
values ('55555555-5555-4555-a555-555555555555', '55555555-5555-5555-9555-555555555555', '44444444-4444-4444-8244-444444444444', STRINGDECODE('これか\n\nghci> :t gcd\ngcd :: Integral a => a -> a -> a'), '2022/09/15 15:33:11');

insert into comment(id, code_id, author_id, body, created)
values ('66666666-6666-4666-a666-666666666666', '66666666-6666-4666-9666-666666666666', '33333333-3333-4333-8233-333333333333', STRINGDECODE('メインアカウント: 1234\nサブアカウント: 5678'), '2022/08/27 11:27:59');

-- users

truncate table users;

insert into users(id, name,icon)
values ('11111111-1111-4111-8211-111111111111', 'ねこ', 'https://i.pinimg.com/564x/45/e8/1f/45e81f80885bf0fce1d438615c7f33bc.jpg');

insert into users(id, name,icon)
values ('22222222-2222-4222-8222-222222222222', 'いぬ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW9ygU97SkpTmUHp7KXSGpaF0ZzezWbfgVQ&usqp=CAU');

insert into users(id, name,icon)
values ('33333333-3333-4333-8233-333333333333', 'うさぎ', 'https://i.pinimg.com/736x/5a/bf/f2/5abff2bdac8b0c112c22df13f9f07f84.jpg');

insert into users(id, name,icon)
values ('44444444-4444-4444-8244-444444444444', 'かえる', 'https://res.cloudinary.com/apollo-prj/image/upload/v1646556237/tol-prod/01FX40A72RR4EEZ0TY2QXJHYMA_2022-03-06T17:43:56%2B09:00.jpg');

insert into users(id, name,icon)
values ('55555555-5555-4555-8255-555555555555', 'さかな', 'https://iconbu.com/wp-content/uploads/2021/03/%E9%AD%9A%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg');

insert into users(id, name,icon)
values ('66666666-6666-4666-8266-666666666666', 'ペンギン', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAVXveX1yi-mQ3d1pRkafo7eiHFYic5CS4o4FY0elEeAFxNEDHmvdvWFb3-OaIIc1mRk&usqp=CAU');

-- tag

truncate table tag;

insert into tag(name, icon)
values ('unknown', 'https://cdn5.vectorstock.com/i/1000x1000/02/19/question-mark-icon-vector-23190219.jpg');

insert into tag(name, icon)
values ('rs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png');

insert into tag(name, icon)
values ('fs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/F_Sharp_logo.svg/1200px-F_Sharp_logo.svg.png');

insert into tag(name, icon)
values ('hs', 'https://cdn-icons-png.flaticon.com/512/919/919850.png');

insert into tag(name, icon)
values ('html', 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png');

insert into tag(name, icon)
values ('js', 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg');

insert into tag(name, icon)
values ('css', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png');

insert into tag(name, icon)
values ('sql', 'https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png');
