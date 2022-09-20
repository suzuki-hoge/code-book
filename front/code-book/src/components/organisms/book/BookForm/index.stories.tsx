import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../../types/fixture/user'
import { BookForm } from './index'

export default {
  title: 'Organisms/Book/BookForm',
  component: BookForm,
} as ComponentMeta<typeof BookForm>

const Template: ComponentStory<typeof BookForm> = (args) => <BookForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
}
