import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../types/fixture/user'
import { Header } from './index'

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: cat,
}
