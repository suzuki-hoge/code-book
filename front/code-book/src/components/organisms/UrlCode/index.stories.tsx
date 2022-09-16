import { ComponentMeta, ComponentStory } from '@storybook/react'
import { codepenUrl } from '../../../types/fixture/code'
import { UrlCode } from './index'

export default {
  title: 'Organisms/UrlCode',
  component: UrlCode,
} as ComponentMeta<typeof UrlCode>

const Template: ComponentStory<typeof UrlCode> = (args) => <UrlCode {...args} />

export const Sample = Template.bind({})
Sample.args = {
  code: codepenUrl,
}
