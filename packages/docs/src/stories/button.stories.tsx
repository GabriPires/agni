import type { StoryObj, Meta } from '@storybook/react'
import { Button, type ButtonProps } from '@agni/ui'
import { User } from 'lucide-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'default',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'link',
        'ghost',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'lg', 'sm'],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj = {}

export const Icon: StoryObj<ButtonProps> = {
  args: {
    size: 'icon',
    children: <User className="w-4 h-4" />,
  },
  argTypes: {
    children: {
      control: { type: 'none' },
    },
    size: { control: { type: 'none' } },
  },
}
