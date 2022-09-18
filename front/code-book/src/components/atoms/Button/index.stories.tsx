import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './index'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: 'Save',
  variant: 'primary',
  onclick: (e) => console.log(e),
}

export const Sub = Template.bind({})
Sub.args = {
  value: 'Cancel',
  variant: 'sub',
  onclick: (e) => console.log(e),
}

export const Caution = Template.bind({})
Caution.args = {
  value: 'Delete',
  variant: 'caution',
  onclick: (e) => console.log(e),
}
