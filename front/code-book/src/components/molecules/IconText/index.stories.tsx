import { ComponentMeta, ComponentStory } from '@storybook/react'
import { scala1 } from '../../../types/fixture/tag'
import { cat } from '../../../types/fixture/user'
import { IconText } from './index'

export default {
  title: 'Molecules/IconText',
  component: IconText,
} as ComponentMeta<typeof IconText>

const Template: ComponentStory<typeof IconText> = (args) => <IconText {...args} />

export const MediumUser = Template.bind({})
MediumUser.args = {
  href: '#',
  icon: cat.icon,
  text: cat.name,
  variant: 'medium',
}

export const SmallTag = Template.bind({})
SmallTag.args = {
  href: '#',
  icon: scala1.icon,
  text: scala1.name,
  variant: 'small',
}
