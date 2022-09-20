import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode, snippetCode, urlCode } from '../../../../types/fixture/code'
import { CodeDetail } from './index'

export default {
  title: 'Templates/Code/CodeDetail',
  component: CodeDetail,
} as ComponentMeta<typeof CodeDetail>

const Template: ComponentStory<typeof CodeDetail> = (args) => <CodeDetail {...args} />

export const FileCode = Template.bind({})
FileCode.args = {
  code: fileCode,
}

export const UrlCode = Template.bind({})
UrlCode.args = {
  code: urlCode,
}

export const SnippetCode = Template.bind({})
SnippetCode.args = {
  code: snippetCode,
}
