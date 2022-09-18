import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../types/fixture/user'
import { Icon } from '../../atoms/Icon'
import { HeaderItem } from './index'

export default {
  title: 'Molecules/HeaderItem',
  component: HeaderItem,
} as ComponentMeta<typeof HeaderItem>

const Template: ComponentStory<typeof HeaderItem> = (args) => <HeaderItem {...args} />

export const Texts = Template.bind({})
Texts.args = {
  children: (
    <>
      <p>foo</p>
      <p>bar</p>
    </>
  ),
}

export const Icons = Template.bind({})
Icons.args = {
  children: (
    <>
      <Icon icon={cat.icon} variant={'medium'} />
      <Icon icon={cat.icon} variant={'medium'} />
    </>
  ),
}
