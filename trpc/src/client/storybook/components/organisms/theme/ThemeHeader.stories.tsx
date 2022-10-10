import { ComponentMeta, ComponentStory } from '@storybook/react'
import { markdownTextThemeFixture } from '../../../fixtures/Theme'
import { ThemeHeader } from 'client/components/organisms/theme/ThemeHeader'

export default {
  title: 'Organisms/theme/ThemeHeader',
  component: ThemeHeader,
} as ComponentMeta<typeof ThemeHeader>

const Template: ComponentStory<typeof ThemeHeader> = (args) => <ThemeHeader {...args} />

export const EditableComponent = Template.bind({})
EditableComponent.args = {
  theme: markdownTextThemeFixture,
  editable: true,
}

export const UneditableComponent = Template.bind({})
UneditableComponent.args = {
  theme: markdownTextThemeFixture,
  editable: false,
}
