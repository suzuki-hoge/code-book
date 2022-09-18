import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode, snippetCode } from '../../../types/fixture/code'
import { CodeHeader } from './index'

export default {
  title: 'Organisms/Code/CodeHeader',
  component: CodeHeader,
} as ComponentMeta<typeof CodeHeader>

const Template: ComponentStory<typeof CodeHeader> = (args) => <CodeHeader {...args} />

export const SmallNoTags = Template.bind({})
SmallNoTags.args = {
  code: snippetCode,
  variant: 'small',
}

export const SmallTags = Template.bind({})
SmallTags.args = {
  code: fileCode,
  variant: 'small',
}

export const MediumNoTags = Template.bind({})
MediumNoTags.args = {
  code: snippetCode,
  variant: 'medium',
}

export const MediumTags = Template.bind({})
MediumTags.args = {
  code: fileCode,
  variant: 'medium',
}
