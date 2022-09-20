import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode } from '../../../../types/fixture/code'
import { FileCodeItem } from './index'

export default {
  title: 'Organisms/Code/FileCodeItem',
  component: FileCodeItem,
} as ComponentMeta<typeof FileCodeItem>

const Template: ComponentStory<typeof FileCodeItem> = (args) => <FileCodeItem {...args} />

export const Standard = Template.bind({})
Standard.args = {
  code: fileCode,
}
