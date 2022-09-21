import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fileCode } from '../../../types/fixture/code'
import { cat } from '../../../types/fixture/user'
import { CodeDetail } from '../code/CodeDetail'
import { Frame } from './index'

export default {
  title: 'Templates/Frame',
  component: Frame,
} as ComponentMeta<typeof Frame>

const Template: ComponentStory<typeof Frame> = (args) => <Frame {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
  children: <CodeDetail code={fileCode} />,
}
