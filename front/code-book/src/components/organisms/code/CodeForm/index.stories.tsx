import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fullBook } from '../../../../types/fixture/book'
import { cat } from '../../../../types/fixture/user'
import { CodeForm } from './index'

export default {
  title: 'Organisms/Code/CodeForm',
  component: CodeForm,
} as ComponentMeta<typeof CodeForm>

const Template: ComponentStory<typeof CodeForm> = (args) => <CodeForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
  bookId: fullBook.id,
}
