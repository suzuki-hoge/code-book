import { ComponentMeta, ComponentStory } from '@storybook/react'
import { urlCode } from '../../../types/fixture/code'
import { UrlCodeItem } from './index'

export default {
  title: 'Organisms/Code/UrlCodeItem',
  component: UrlCodeItem,
} as ComponentMeta<typeof UrlCodeItem>

const Template: ComponentStory<typeof UrlCodeItem> = (args) => <UrlCodeItem {...args} />

export const Standard = Template.bind({})
Standard.args = {
  code: urlCode,
}
