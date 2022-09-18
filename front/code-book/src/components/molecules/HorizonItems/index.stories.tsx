import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../types/fixture/user'
import { Icon } from '../../atoms/Icon'
import { HorizonItems } from './index'

export default {
  title: 'Molecules/HorizonItems',
  component: HorizonItems,
} as ComponentMeta<typeof HorizonItems>

const Template: ComponentStory<typeof HorizonItems> = (args) => <HorizonItems {...args} />

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
