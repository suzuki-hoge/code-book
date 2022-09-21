import { Book } from '../book'
import { fileCode, snippetCode, urlCode } from './code'
import { scala } from './tag'
import { cat } from './user'

export const fullBook: Book = {
  id: '11111111-1111-4111-8111-111111111111',
  emoji: '🖼',
  title: 'フロントコード集',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author: cat,
  tags: [scala],
  created: '2022/09/01 12:34:56',
  codes: [fileCode, urlCode, snippetCode],
}
