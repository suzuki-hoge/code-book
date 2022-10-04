import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SubmitButton } from 'client/components/atoms/SubmitButton'

export default {
  title: 'Atoms/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />

export const EnabledComponent = Template.bind({})
EnabledComponent.args = {
  value: 'New Theme',
  enabled: true,
}

export const DisabledComponent = Template.bind({})
DisabledComponent.args = {
  value: 'New Theme',
  enabled: false,
}
