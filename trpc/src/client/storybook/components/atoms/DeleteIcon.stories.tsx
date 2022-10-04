import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DeleteIcon } from 'client/components/atoms/DeleteIcon'

export default {
  title: 'Atoms/DeleteIcon',
  component: DeleteIcon,
} as ComponentMeta<typeof DeleteIcon>

const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon {...args} />

export const SmallComponent = Template.bind({})
SmallComponent.args = {
  variant: 'small',
}

export const MediumComponent = Template.bind({})
MediumComponent.args = {
  variant: 'medium',
}
