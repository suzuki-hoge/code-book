import { Book } from '../book'
import { accordionCode, contestCode1, contestCode2, contestCode3, deleteMemoCode, youtubeCode } from './code'
import { atcoder, css, haskell, html, js, mysql, scala } from './tag'
import { cat, dog, rabbit } from './user'

export const frontBook: Book = {
  id: 1,
  title: 'フロントコード集',
  author: cat,
  tags: [js, css, html],
  created: new Date(2022, 8, 1, 12, 34, 56),
  cover: null,
  codes: [accordionCode, youtubeCode],
}

export const halfAndHalfBook: Book = {
  id: 2,
  title: 'お題: Half and Half',
  author: dog,
  tags: [atcoder, scala, haskell],
  created: new Date(2022, 8, 1, 12, 34, 56),
  cover: 'https://tomo-kon.com/wp-content/uploads/2020/06/AtCoder.jpg',
  codes: [contestCode1, contestCode2, contestCode3],
}

export const snippetBook: Book = {
  id: 3,
  title: 'コピペできるやつ',
  author: rabbit,
  tags: [mysql],
  created: new Date(2022, 8, 1, 12, 34, 56),
  cover: null,
  codes: [deleteMemoCode],
}
