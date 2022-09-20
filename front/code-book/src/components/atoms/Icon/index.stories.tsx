import { ComponentMeta, ComponentStory } from '@storybook/react'
import { scala1 } from '../../../types/fixture/tag'
import { cat } from '../../../types/fixture/user'
import { Icon } from './index'

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const MediumUser = Template.bind({})
MediumUser.args = {
  icon: cat.icon,
  variant: 'medium',
}

export const SmallTag = Template.bind({})
SmallTag.args = {
  icon: scala1.icon,
  variant: 'small',
}
