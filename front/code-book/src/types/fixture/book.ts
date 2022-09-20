import { Book } from '../book'
import { fileCode, snippetCode, urlCode } from './code'
import { scala1, scala2, scala3, scala4, scala5 } from './tag'
import { cat } from './user'

export const fullBook1: Book = {
  id: '11111111-1111-4111-8111-111111111111',
  emoji: '🖼',
  title: 'フロントコード集',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author: cat,
  tags: [scala1, scala2, scala3, scala4, scala5],
  created: new Date(2022, 8, 1, 12, 34, 56),
  codes: [fileCode, urlCode, snippetCode],
}

export const fullBook2: Book = { ...fullBook1 }
fullBook2.id = '22222222-2222-4222-8222-222222222222'

export const fullBook3: Book = { ...fullBook1 }
fullBook3.id = '33333333-3333-4333-8333-333333333333'
