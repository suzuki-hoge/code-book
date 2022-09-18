import { ComponentMeta, ComponentStory } from '@storybook/react'
import { multiLineComment, singleLineComment } from '../../../types/fixture/comment'
import { CommentItem } from './index'

export default {
  title: 'Organisms/Comment/CommentItem',
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />

export const SingleLine = Template.bind({})
SingleLine.args = {
  comment: singleLineComment,
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  comment: multiLineComment,
}
