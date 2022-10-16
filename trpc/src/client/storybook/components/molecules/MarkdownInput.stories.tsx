import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MarkdownInput } from 'client/components/molecules/MarkdownInput'
import { markdownTextCommentFixture } from 'client/storybook/fixtures/Comment'

export default {
  title: 'Molecules/MarkdownInput',
  component: MarkdownInput,
} as ComponentMeta<typeof MarkdownInput>

const Template: ComponentStory<typeof MarkdownInput> = (args) => <MarkdownInput {...args} />

export const WritingComponent = Template.bind({})
WritingComponent.args = {
  text: markdownTextCommentFixture.body,
  isWriting: true,
}

export const PreviewingComponent = Template.bind({})
PreviewingComponent.args = {
  text: markdownTextCommentFixture.body,
  isWriting: false,
}

export const EmptyComponent = Template.bind({})
EmptyComponent.args = {
  text: '',
  isWriting: false,
}
