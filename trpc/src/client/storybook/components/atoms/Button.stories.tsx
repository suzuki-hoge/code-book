import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'client/components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Component = Template.bind({})
Component.args = {
  value: 'Cancel',
}
