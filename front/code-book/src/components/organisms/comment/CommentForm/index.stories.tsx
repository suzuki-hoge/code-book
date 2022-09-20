import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode } from '../../../../types/fixture/code'
import { cat } from '../../../../types/fixture/user'
import { CommentForm } from './index'

export default {
  title: 'Organisms/Comment/CommentForm',
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
  codeId: fileCode.id,
}
