import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DateText } from './index'

export default {
  title: 'Atoms/DateText',
  component: DateText,
} as ComponentMeta<typeof DateText>

const Template: ComponentStory<typeof DateText> = (args) => <DateText {...args} />

export const Small = Template.bind({})
Small.args = {
  date: new Date(2022, 9, 1, 12, 34, 56),
  variant: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  date: new Date(2022, 9, 1, 12, 34, 56),
  variant: 'medium',
}
