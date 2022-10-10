import { ComponentMeta, ComponentStory } from '@storybook/react'
import { markdownTextThemeFixture, plainTextThemeFixture } from '../../../fixtures/Theme'
import { ThemeList } from 'client/components/templates/theme/ThemeList'

export default {
  title: 'Templates/theme/ThemeList',
  component: ThemeList,
} as ComponentMeta<typeof ThemeList>

const Template: ComponentStory<typeof ThemeList> = (args) => <ThemeList {...args} />

export const Component = Template.bind({})
Component.args = {
  themes: [markdownTextThemeFixture, plainTextThemeFixture],
}
