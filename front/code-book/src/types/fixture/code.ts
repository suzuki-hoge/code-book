import { Code, FileCode, SnippetCode, UrlCode, Comment } from '../code'
import { js, css, html, mysql, atcoder, scala, haskell } from './tag'
import { cat, dog, rabbit } from './user'

export const jsFile: FileCode = {
  id: 1,
  filename: 'index.js',
  body: `const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}`,
  tag: js,
}

export const cssFile: FileCode = {
  id: 2,
  filename: 'index.css',
  body: `* {
  margin: 0;
  padding: 0;
}
section {
  margin-top: 30px;
}
.accordion {
  width: 200px;
  margin: 0 auto;
}
.menu {
  background-color: purple;
  color: white;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.menu:hover,
.menu:active,
.menu.is-active {
  background-color: black;
}
.contents {
  text-align: center;
  line-height: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition-duration: 0.4s;
}

.contents.is-open {
  border: 1px solid black;
  padding: 10px;
  line-height: normal;
  height: auto;
  opacity: 1;
}`,
  tag: css,
}

export const codepenUrl: UrlCode = {
  id: 3,
  url: 'https://codepen.io/scottshefler/pen/XdGbQZ?editors=1111',
  tags: [js, css, html],
}

export const atcoderUrl1: UrlCode = {
  id: 4,
  url: 'https://atcoder.jp/contests/abc095/submissions/34681149',
  tags: [atcoder, scala],
}

export const atcoderUrl2: UrlCode = {
  id: 5,
  url: 'https://atcoder.jp/contests/abc095/submissions/34363483',
  tags: [atcoder, haskell],
}

export const atcoderUrl3: UrlCode = {
  id: 6,
  url: 'https://atcoder.jp/contests/abc095/submissions/25914990',
  tags: [atcoder, scala],
}

export const sqlSnippet: SnippetCode = {
  id: 4,
  name: 'delete test data',
  //@formatter:off
  body: `delete status
where status.user_id in ( $user_id$ )
and plan = '$plan$';

delete item
from item
join foo on foo.id = item.foo_id
where foo.user_id in ( $user_id$ );

delete foo
where user_id in ( $user_id$ );`,
  //@formatter:on
  tag: mysql,
  varKeys: ['user_id', 'plan'],
  varVals: ['', 'active'],
}

export const comment1: Comment = {
  id: 1,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: dog,
  created: new Date(2022, 8, 1, 12, 34, 56),
}

export const comment2: Comment = {
  id: 2,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  author: rabbit,
  created: new Date(2022, 8, 1, 12, 34, 56),
}

export const accordionCode: Code = {
  id: 1,
  title: 'アコーディオン',
  author: cat,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [comment1],
  kind: 'file',
  body: [jsFile, cssFile],
}

export const youtubeCode: Code = {
  id: 2,
  title: 'YouTube を再生する',
  author: dog,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [comment1, comment2],
  kind: 'url',
  body: codepenUrl,
}

export const contestCode1: Code = {
  id: 2,
  title: 'Half and Half',
  author: cat,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [comment1, comment2],
  kind: 'url',
  body: atcoderUrl1,
}

export const contestCode2: Code = {
  id: 3,
  title: 'Half and Half',
  author: dog,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [comment1, comment2],
  kind: 'url',
  body: atcoderUrl2,
}

export const contestCode3: Code = {
  id: 4,
  title: 'Half and Half',
  author: rabbit,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [comment1, comment2],
  kind: 'url',
  body: atcoderUrl3,
}

export const deleteMemoCode: Code = {
  id: 5,
  title: '自分のデータを削除する',
  author: rabbit,
  created: new Date(2022, 8, 1, 12, 34, 56),
  comments: [],
  kind: 'snippet',
  body: sqlSnippet,
}
