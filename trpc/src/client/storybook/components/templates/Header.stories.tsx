import { ComponentMeta, ComponentStory } from '@storybook/react'
import { userFixture } from '../../fixtures/User'
import { Header } from 'client/components/templates/Header'

export default {
  title: 'Templates/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
}
