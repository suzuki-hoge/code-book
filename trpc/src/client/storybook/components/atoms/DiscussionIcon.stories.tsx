import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DiscussionIcon } from 'client/components/atoms/DiscussionIcon'

export default {
  title: 'Atoms/DiscussionIcon',
  component: DiscussionIcon,
} as ComponentMeta<typeof DiscussionIcon>

const Template: ComponentStory<typeof DiscussionIcon> = (args) => <DiscussionIcon {...args} />

export const SmallComponent = Template.bind({})
SmallComponent.args = {
  count: 12,
  variant: 'small',
}

export const MediumComponent = Template.bind({})
MediumComponent.args = {
  count: 12,
  variant: 'medium',
}
