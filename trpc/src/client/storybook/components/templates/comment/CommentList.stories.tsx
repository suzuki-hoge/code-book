import { ComponentMeta, ComponentStory } from '@storybook/react'
import { markdownTextCommentFixture, plainTextCommentFixture } from '../../../fixtures/Comment'
import { CommentList } from 'client/components/templates/comment/CommentList'

export default {
  title: 'Templates/comment/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Component = Template.bind({})
Component.args = {
  comments: [markdownTextCommentFixture, plainTextCommentFixture],
}
