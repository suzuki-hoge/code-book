import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EditIcon } from 'client/components/atoms/EditIcon'

export default {
  title: 'Atoms/EditIcon',
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>

const Template: ComponentStory<typeof EditIcon> = (args) => <EditIcon {...args} />

export const SmallComponent = Template.bind({})
SmallComponent.args = {
  variant: 'small',
}

export const MediumComponent = Template.bind({})
MediumComponent.args = {
  variant: 'medium',
}
