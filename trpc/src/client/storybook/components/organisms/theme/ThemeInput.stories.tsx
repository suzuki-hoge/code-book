import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeInput } from 'client/components/organisms/theme/ThemeInput'
import { userFixture } from 'client/storybook/fixtures/User'

export default {
  title: 'Organisms/theme/ThemeInput',
  component: ThemeInput,
} as ComponentMeta<typeof ThemeInput>

const Template: ComponentStory<typeof ThemeInput> = (args) => <ThemeInput {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
}
