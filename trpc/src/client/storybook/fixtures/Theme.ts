import { markdownTextCommentFixture, plainTextCommentFixture } from 'client/storybook/fixtures/Comment'
import { userFixture } from 'client/storybook/fixtures/User'
import { ThemeSummary } from 'domain/Theme'

export const markdownTextThemeFixture: ThemeSummary = {
  id: '11111111-1111-4111-8111-111111111111',
  title: 'Lorem ipsum dolor sit amet',
  created: '2022/10/01 12:34',
  firstComment: markdownTextCommentFixture,
  commentCount: 5,
  author: userFixture,
}

export const plainTextThemeFixture: ThemeSummary = {
  id: '11111111-1111-4111-8111-111111111112',
  title: 'Lorem ipsum dolor sit amet',
  created: '2022/10/01 12:34',
  firstComment: plainTextCommentFixture,
  commentCount: 12,
  author: userFixture,
}
