import { ComponentMeta, ComponentStory } from '@storybook/react'
import { sqlSnippet } from '../../../types/fixture/code'
import { SnippetCode } from './index'

export default {
  title: 'Organisms/SnippetCode',
  component: SnippetCode,
} as ComponentMeta<typeof SnippetCode>

const Template: ComponentStory<typeof SnippetCode> = (args) => <SnippetCode {...args} />

export const Sample = Template.bind({})
Sample.args = {
  code: sqlSnippet,
}
