import { userFixture } from 'client/storybook/fixtures/User'
import { Comment } from 'domain/Comment'

export const markdownTextCommentFixture: Comment = {
  id: '11111111-1111-4111-8111-111111111111',
  body: `
# bla bla bla
## bla bla bla
1. bla bla bla
1. bla bla bla
1. bla bla bla

## bla bla bla
sample
\`\`\`js
const ns = [1, 2, 3, 4];

const sum = ns.reduce((acc, n) => acc + n, 0);

console.log(sum);    // 10
\`\`\`

## bla bla bla
see also [here](#).
`.trim(),
  created: '2022/10/01 12:34',
  author: userFixture,
}

export const plainTextCommentFixture: Comment = {
  id: '11111111-1111-4111-8111-111111111111',
  body: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`.trim(),
  created: '2022/10/01 12:34',
  author: userFixture,
}
