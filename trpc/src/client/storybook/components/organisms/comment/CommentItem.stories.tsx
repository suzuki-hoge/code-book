import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentItem } from 'client/components/organisms/comment/CommentItem'
import { markdownTextCommentFixture } from 'client/storybook/fixtures/Comment'

export default {
  title: 'Organisms/comment/CommentItem',
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />

export const Component = Template.bind({})
Component.args = {
  comment: markdownTextCommentFixture,
}
