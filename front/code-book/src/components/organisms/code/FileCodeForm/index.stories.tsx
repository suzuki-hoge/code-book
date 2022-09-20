import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../../types/fixture/user'
import { FileCodeForm } from './index'

export default {
  title: 'Organisms/Code/FileCodeForm',
  component: FileCodeForm,
} as ComponentMeta<typeof FileCodeForm>

const Template: ComponentStory<typeof FileCodeForm> = (args) => <FileCodeForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
}
