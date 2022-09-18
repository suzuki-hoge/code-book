import { ComponentMeta, ComponentStory } from '@storybook/react'
import { snippetCode } from '../../../types/fixture/code'
import { SnippetCodeItem } from './index'

export default {
  title: 'Organisms/Code/SnippetCodeItem',
  component: SnippetCodeItem,
} as ComponentMeta<typeof SnippetCodeItem>

const Template: ComponentStory<typeof SnippetCodeItem> = (args) => <SnippetCodeItem {...args} />

export const Standard = Template.bind({})
Standard.args = {
  code: snippetCode,
}
