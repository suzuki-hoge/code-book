import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Balloon } from 'client/components/molecules/Balloon'

export default {
  title: 'Molecules/Balloon',
  component: Balloon,
} as ComponentMeta<typeof Balloon>

const Template: ComponentStory<typeof Balloon> = (args) => <Balloon {...args} />

export const Component = Template.bind({})
Component.args = {
  children: <span>bla bla bla</span>,
}
