import { ComponentMeta, ComponentStory } from '@storybook/react'
import { scala } from '../../../types/fixture/tag'
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
  icon: scala.icon,
  variant: 'small',
}

export const PngImageTag = Template.bind({})
PngImageTag.args = {
  icon: 'https://cdn.icon-icons.com/icons2/2645/PNG/512/question_circle_icon_159907.png',
  variant: 'medium',
}
