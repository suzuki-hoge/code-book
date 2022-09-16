import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cssFile, jsFile } from '../../../types/fixture/code'
import { FileCode } from './index'

export default {
  title: 'Organisms/FileCode',
  component: FileCode,
} as ComponentMeta<typeof FileCode>

const Template: ComponentStory<typeof FileCode> = (args) => <FileCode {...args} />

export const Sample = Template.bind({})
Sample.args = {
  code: [jsFile, cssFile],
}
