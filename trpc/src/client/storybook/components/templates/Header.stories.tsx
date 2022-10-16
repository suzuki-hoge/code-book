import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from 'client/components/templates/Header'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Templates/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
}
