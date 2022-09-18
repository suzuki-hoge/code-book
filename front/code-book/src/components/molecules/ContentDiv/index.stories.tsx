import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../types/fixture/user'
import { Icon } from '../../atoms/Icon'
import { ContentDiv } from './index'

export default {
  title: 'Molecules/ContentDiv',
  component: ContentDiv,
} as ComponentMeta<typeof ContentDiv>

const Template: ComponentStory<typeof ContentDiv> = (args) => <ContentDiv {...args} />

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
