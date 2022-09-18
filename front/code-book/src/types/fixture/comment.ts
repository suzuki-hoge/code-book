import { Comment } from '../comment'
import { cat } from './user'

export const singleLineComment: Comment = {
  id: 1,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: cat,
  created: new Date(2022, 9, 1, 12, 34, 56),
}

export const multiLineComment: Comment = {
  id: 2,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.


Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  author: cat,
  created: new Date(2022, 9, 1, 12, 34, 56),
}
