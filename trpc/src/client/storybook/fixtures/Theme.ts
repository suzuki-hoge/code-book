import {markdownTextCommentFixture, plainTextCommentFixture} from './Comment'
import {userFixture} from 'client/storybook/fixtures/User'
import {Theme} from 'domain/Theme'

export const markdownTextThemeFixture: Theme = {
  id: '11111111-1111-4111-8111-111111111111',
  title: 'Lorem ipsum dolor sit amet',
  created: '2022/10/01 12:34',
  description: markdownTextCommentFixture,
  comments: 5,
  author: userFixture,
}

export const plainTextThemeFixture: Theme = {
  id: '11111111-1111-4111-8111-111111111111',
  title: 'Lorem ipsum dolor sit amet',
  created: '2022/10/01 12:34',
  description: plainTextCommentFixture,
  comments: 12,
  author: userFixture,
}
