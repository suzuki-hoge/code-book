import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fullBook1 } from '../../../../types/fixture/book'
import { BookList } from './index'

export default {
  title: 'Templates/Book/BookList',
  component: BookList,
} as ComponentMeta<typeof BookList>

const Template: ComponentStory<typeof BookList> = (args) => <BookList {...args} />

export const Standard = Template.bind({})
Standard.args = {
  books: [fullBook1, fullBook1, fullBook1, fullBook1],
}