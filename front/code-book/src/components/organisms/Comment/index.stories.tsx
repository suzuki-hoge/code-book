import { ComponentMeta, ComponentStory } from '@storybook/react'
import { comment1, comment2 } from '../../../types/fixture/code'
import { Comment } from './index'

export default {
  title: 'Organisms/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const SingleLine = Template.bind({})
SingleLine.args = {
  comment: comment1,
}

export const MultiLines = Template.bind({})
MultiLines.args = {
  comment: comment2,
}
