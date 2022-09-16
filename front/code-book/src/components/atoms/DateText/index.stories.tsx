import { ComponentMeta, ComponentStory } from '@storybook/react'
import { theme } from '../../../themes'
import { DateText } from './index'

export default {
  title: 'Atoms/DateText',
  component: DateText,
  argTypes: {
    date: {
      control: { type: 'date' },
    },
  },
} as ComponentMeta<typeof DateText>

const Template: ComponentStory<typeof DateText> = (args) => <DateText {...args} />

export const Simple = Template.bind({})
Simple.args = {
  date: new Date(2022, 8, 1, 12, 34, 56),
  size: theme.fontSizes.fs2,
}
