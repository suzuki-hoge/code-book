import { FileCode, SnippetCode, UrlCode } from '../code'
import { multiLineComment, singleLineComment } from './comment'
import { scala } from './tag'
import { cat } from './user'

export const fileCode: FileCode = {
  id: 1,
  title: 'アコーディオンの実装例',
  author: cat,
  created: new Date(2022, 9, 1, 12, 34, 56),
  tags: [scala, scala],
  comments: [singleLineComment, multiLineComment],
  kind: 'file',
  files: [
    {
      name: 'index.js',
      text: `const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}`,
    },
    {
      name: 'index.css',
      text: `* {
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
    },
  ],
}

export const urlCode: UrlCode = {
  id: 2,
  title: 'YouTube の埋め込み',
  author: cat,
  created: new Date(2022, 9, 1, 12, 34, 56),
  tags: [scala, scala, scala],
  comments: [],
  kind: 'url',
  url: 'https://codepen.io/scottshefler/pen/XdGbQZ?editors=1111',
}

export const snippetCode: SnippetCode = {
  id: 3,
  title: 'テストデータを消すクエリ',
  author: cat,
  created: new Date(2022, 9, 1, 12, 34, 56),
  tags: [],
  comments: [multiLineComment],
  kind: 'snippet',
  //@formatter:off
  file: {
    name: 'delete.sql',
    text: `delete status
where status.user_id in ( $user_id$ )
and plan = '$plan$';

delete item
from item
join foo on foo.id = item.foo_id
where foo.user_id in ( $user_id$ );

delete foo
where user_id in ( $user_id$ );`,
    //@formatter:on
  },
  variables: [
    {
      name: 'user_id',
      value: '',
    },
    {
      name: 'plan',
      value: 'active',
    },
  ],
}
