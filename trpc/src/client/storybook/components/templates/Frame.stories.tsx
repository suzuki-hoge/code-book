import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeHeader } from 'client/components/organisms/theme/ThemeHeader'
import { Frame } from 'client/components/templates/Frame'
import { plainTextThemeFixture } from 'client/storybook/fixtures/Theme'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Templates/Frame',
  component: Frame,
} as ComponentMeta<typeof Frame>

const Template: ComponentStory<typeof Frame> = (args) => <Frame {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
  children: <ThemeHeader theme={plainTextThemeFixture} editable={false} />,
}
