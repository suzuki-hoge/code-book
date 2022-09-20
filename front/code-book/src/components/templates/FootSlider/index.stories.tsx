import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FootSlider } from './index'

export default {
  title: 'Templates/FootSlider',
  component: FootSlider,
} as ComponentMeta<typeof FootSlider>

const Template: ComponentStory<typeof FootSlider> = (args) => <FootSlider {...args} />

export const ShortContent = Template.bind({})
ShortContent.args = {
  title: 'foo',
  children: (
    <>
      {Array.from(Array(8).keys()).map((n) => (
        <p key={n}>foo {n + 1}</p>
      ))}
    </>
  ),
}

export const LongContent = Template.bind({})
LongContent.args = {
  title: 'foo',
  children: (
    <>
      {Array.from(Array(32).keys()).map((n) => (
        <p key={n}>foo {n + 1}</p>
      ))}
    </>
  ),
}
