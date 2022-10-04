import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from 'client/components/atoms/Logo'

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Component = Template.bind({})
Component.args = {

}
