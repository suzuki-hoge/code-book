import { ComponentMeta, ComponentStory } from '@storybook/react'
import { markdownTextThemeFixture } from '../../../fixtures/Theme'
import { ThemeItem } from 'client/components/organisms/theme/ThemeItem'

export default {
  title: 'Organisms/theme/ThemeItem',
  component: ThemeItem,
} as ComponentMeta<typeof ThemeItem>

const Template: ComponentStory<typeof ThemeItem> = (args) => <ThemeItem {...args} />

export const Component = Template.bind({})
Component.args = {
  theme: markdownTextThemeFixture,
}
