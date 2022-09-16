import { ComponentMeta, ComponentStory } from '@storybook/react'
import { frontBook, halfAndHalfBook, snippetBook } from '../../../types/fixture/book'
import { BookPage } from './index'

export default {
  title: 'Templates/BookPage',
  component: BookPage,
} as ComponentMeta<typeof BookPage>

const Template: ComponentStory<typeof BookPage> = (args) => <BookPage {...args} />

export const Sample1 = Template.bind({})
Sample1.args = {
  book: frontBook,
}

export const Sample2 = Template.bind({})
Sample2.args = {
  book: halfAndHalfBook,
}

export const Sample3 = Template.bind({})
Sample3.args = {
  book: snippetBook,
}
