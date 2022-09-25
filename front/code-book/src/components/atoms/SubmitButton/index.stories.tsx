import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SubmitButton } from './index'

export default {
  title: 'Atoms/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />

export const Standard = Template.bind({})
Standard.args = {
  value: 'Save',
  enabled: true,
}
