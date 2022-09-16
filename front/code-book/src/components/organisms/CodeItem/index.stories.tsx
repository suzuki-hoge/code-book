import { ComponentMeta, ComponentStory } from '@storybook/react'
import { youtubeCode } from '../../../types/fixture/code'
import { CodeItem } from './index'

export default {
  title: 'Organisms/CodeItem',
  component: CodeItem,
} as ComponentMeta<typeof CodeItem>

const Template: ComponentStory<typeof CodeItem> = (args) => <CodeItem {...args} />

export const Sample = Template.bind({})
Sample.args = {
  code: youtubeCode,
}
