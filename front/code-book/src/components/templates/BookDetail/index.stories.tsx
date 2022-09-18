import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fullBook } from '../../../types/fixture/book'
import { BookDetail } from './index'

export default {
  title: 'Templates/Book/BookDetail',
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>

const Template: ComponentStory<typeof BookDetail> = (args) => <BookDetail {...args} />

export const Standard = Template.bind({})
Standard.args = {
  book: fullBook,
}
