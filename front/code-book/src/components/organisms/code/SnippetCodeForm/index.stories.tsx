import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../../types/fixture/user'
import { SnippetCodeForm } from './index'

export default {
  title: 'Organisms/Code/SnippetCodeForm',
  component: SnippetCodeForm,
} as ComponentMeta<typeof SnippetCodeForm>

const Template: ComponentStory<typeof SnippetCodeForm> = (args) => <SnippetCodeForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
}
