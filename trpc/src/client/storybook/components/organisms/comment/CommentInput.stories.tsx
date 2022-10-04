import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentInput } from 'client/components/organisms/comment/CommentInput'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Organisms/comment/CommentInput',
  component: CommentInput,
} as ComponentMeta<typeof CommentInput>

const Template: ComponentStory<typeof CommentInput> = (args) => <CommentInput {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
}
