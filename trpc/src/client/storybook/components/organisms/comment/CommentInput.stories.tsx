import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentInput } from 'client/components/organisms/comment/CommentInput'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Organisms/comment/CommentInput',
  component: CommentInput,
} as ComponentMeta<typeof CommentInput>

const Template: ComponentStory<typeof CommentInput> = (args) => <CommentInput {...args} />

export const CreateComponent = Template.bind({})
CreateComponent.args = {
  user: userFixture,
  variant: 'create',
}

export const UpdateComponent = Template.bind({})
UpdateComponent.args = {
  user: userFixture,
  variant: 'update',
}
