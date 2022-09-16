import { ComponentMeta, ComponentStory } from '@storybook/react'
import { jsFile } from '../../../types/fixture/code'
import { CodeBlock } from './index'

export default {
  title: 'Atoms/CodeBlock',
  component: CodeBlock,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof CodeBlock>

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />

export const Sample = Template.bind({})
Sample.args = {
  body: jsFile.body,
}
