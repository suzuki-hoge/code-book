import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ImageIcon } from 'client/components/atoms/ImageIcon'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Atoms/ImageIcon',
  component: ImageIcon,
} as ComponentMeta<typeof ImageIcon>

const Template: ComponentStory<typeof ImageIcon> = (args) => <ImageIcon {...args} />

export const SmallComponent = Template.bind({})
SmallComponent.args = {
  path: userFixture.icon,
  variant: 'small',
}

export const MediumComponent = Template.bind({})
MediumComponent.args = {
  path: userFixture.icon,
  variant: 'medium',
}
