import type { StoryObj, Meta } from '@storybook/react'
import { Input, type InputProps } from '@agni-ui/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    placeholder: 'Type something...',
  },
  argTypes: {},
} as Meta<InputProps>

export const Default: StoryObj = {}
