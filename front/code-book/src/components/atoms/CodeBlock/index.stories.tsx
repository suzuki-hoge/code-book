import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode } from '../../../types/fixture/code'
import { CodeBlock } from './index'

export default {
  title: 'Atoms/CodeBlock',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />

export const Javascript = Template.bind({})
Javascript.args = {
  filename: fileCode.files[0].name,
  text: fileCode.files[0].text,
}

export const Css = Template.bind({})
Css.args = {
  filename: fileCode.files[1].name,
  text: fileCode.files[1].text,
}
