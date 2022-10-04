import { ComponentMeta, ComponentStory } from '@storybook/react'
import { markdownTextCommentFixture, plainTextCommentFixture } from '../../fixtures/Comment'
import { MarkdownText } from 'client/components/atoms/MarkdownText'

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
