import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconBalloon } from 'client/components/molecules/IconBalloon'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Molecules/IconBalloon',
  component: IconBalloon,
} as ComponentMeta<typeof IconBalloon>

const Template: ComponentStory<typeof IconBalloon> = (args) => <IconBalloon {...args} />

export const Component = Template.bind({})
Component.args = {
  icon: userFixture.icon,
  children: <span>bla bla bla</span>,
}
