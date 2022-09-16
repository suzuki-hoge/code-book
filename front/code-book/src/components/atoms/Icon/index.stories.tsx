import { ComponentMeta, ComponentStory } from '@storybook/react'
import { theme } from '../../../themes'
import { cat } from '../../../types/fixture/user'
import { Icon } from './index'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Sample = Template.bind({})
Sample.args = {
  src: cat.icon,
  size: theme.iconSizes.is6,
}
