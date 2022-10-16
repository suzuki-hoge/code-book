import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeItem } from 'client/components/organisms/theme/ThemeItem'
import { markdownTextThemeFixture } from 'client/storybook/fixtures/Theme'

export default {
  title: 'Organisms/theme/ThemeItem',
  component: ThemeItem,
} as ComponentMeta<typeof ThemeItem>

const Template: ComponentStory<typeof ThemeItem> = (args) => <ThemeItem {...args} />

export const Component = Template.bind({})
Component.args = {
  theme: markdownTextThemeFixture,
  editable: true,
}
