import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fullBook } from '../../../types/fixture/book'
import { BookHeader } from './index'

export default {
  title: 'Organisms/Book/BookHeader',
  component: BookHeader,
} as ComponentMeta<typeof BookHeader>

const Template: ComponentStory<typeof BookHeader> = (args) => <BookHeader {...args} />

export const Small = Template.bind({})
Small.args = {
  book: fullBook,
  variant: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  book: fullBook,
  variant: 'medium',
}
