import { ComponentMeta, ComponentStory } from '@storybook/react'
import { frontBook, halfAndHalfBook } from '../../../types/fixture/book'
import { BookCover } from './index'

export default {
  title: 'Templates/BookCover',
  component: BookCover,
} as ComponentMeta<typeof BookCover>

const Template: ComponentStory<typeof BookCover> = (args) => <BookCover {...args} />

export const Sample1 = Template.bind({})
Sample1.args = {
  book: frontBook,
}

export const Sample2 = Template.bind({})
Sample2.args = {
  book: halfAndHalfBook,
}
