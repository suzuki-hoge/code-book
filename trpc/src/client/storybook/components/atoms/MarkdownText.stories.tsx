import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MarkdownText } from 'client/components/atoms/MarkdownText'
import { markdownTextCommentFixture, plainTextCommentFixture } from 'client/storybook/fixtures/Comment'

export default {
  title: 'Atoms/MarkdownText',
  component: MarkdownText,
} as ComponentMeta<typeof MarkdownText>

const Template: ComponentStory<typeof MarkdownText> = (args) => <MarkdownText {...args} />

export const MarkdownTextComponent = Template.bind({})
MarkdownTextComponent.args = {
  text: markdownTextCommentFixture.body,
}

export const PlainTextComponent = Template.bind({})
PlainTextComponent.args = {
  text: plainTextCommentFixture.body,
}
