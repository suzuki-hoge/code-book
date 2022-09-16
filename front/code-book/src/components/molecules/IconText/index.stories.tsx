import { ComponentMeta, ComponentStory } from '@storybook/react'
import { scala } from '../../../types/fixture/tag'
import { cat } from '../../../types/fixture/user'
import { IconText } from './index'

export default {
  title: 'Molecules/IconText',
  component: IconText,
} as ComponentMeta<typeof IconText>

const Template: ComponentStory<typeof IconText> = (args) => <IconText {...args} />

export const SmallIconText = Template.bind({})
SmallIconText.args = {
  href: '#',
  icon: scala.icon,
  text: scala.name,
  variant: 'small',
}

export const MediumIconText = Template.bind({})
MediumIconText.args = {
  href: '#',
  icon: cat.icon,
  text: cat.name,
  variant: 'medium',
}
