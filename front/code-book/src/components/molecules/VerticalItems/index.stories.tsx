import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../types/fixture/user'
import { Icon } from '../../atoms/Icon'
import { VerticalItems } from './index'

export default {
  title: 'Molecules/VerticalItems',
  component: VerticalItems,
} as ComponentMeta<typeof VerticalItems>

const Template: ComponentStory<typeof VerticalItems> = (args) => <VerticalItems {...args} />

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
