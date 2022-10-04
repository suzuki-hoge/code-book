import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SelectLabel } from 'client/components/atoms/SelectLabel'

export default {
  title: 'Atoms/SelectLabel',
  component: SelectLabel,
} as ComponentMeta<typeof SelectLabel>

const Template: ComponentStory<typeof SelectLabel> = (args) => <SelectLabel {...args} />

export const EnabledComponent = Template.bind({})
EnabledComponent.args = {
  value: 'Write',
  selected: true,
}

export const DisabledComponent = Template.bind({})
DisabledComponent.args = {
  value: 'Preview',
  selected: false,
}
