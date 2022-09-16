import { ComponentMeta, ComponentStory } from '@storybook/react'
import { accordionCode, deleteMemoCode, youtubeCode } from '../../../types/fixture/code'
import { CodePage } from './index'

export default {
  title: 'Templates/CodePage',
  component: CodePage,
} as ComponentMeta<typeof CodePage>

const Template: ComponentStory<typeof CodePage> = (args) => <CodePage {...args} />

export const FileCode = Template.bind({})
FileCode.args = {
  code: accordionCode,
}

export const UrlCode = Template.bind({})
UrlCode.args = {
  code: youtubeCode,
}

export const SnippetCode = Template.bind({})
SnippetCode.args = {
  code: deleteMemoCode,
}
