import { ComponentMeta } from '@storybook/react'
import { Button } from './index'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary = () => {
  return <Button>Primary</Button>
}
