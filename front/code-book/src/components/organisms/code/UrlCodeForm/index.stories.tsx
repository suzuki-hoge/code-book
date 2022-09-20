import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cat } from '../../../../types/fixture/user'
import { UrlCodeForm } from './index'

export default {
  title: 'Organisms/Code/UrlCodeForm',
  component: UrlCodeForm,
} as ComponentMeta<typeof UrlCodeForm>

const Template: ComponentStory<typeof UrlCodeForm> = (args) => <UrlCodeForm {...args} />

export const Standard = Template.bind({})
Standard.args = {
  user: cat,
}
