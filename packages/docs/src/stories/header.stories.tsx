import type { StoryObj, Meta } from '@storybook/react'
import {
  HeaderContainer,
  HeaderLogo,
  type HeaderContainerProps,
  HeaderTitle,
  HeaderSubtitle,
} from '@agni-ui/react'

export default {
  title: 'Pages/Header',
  component: HeaderContainer,
  args: {
    children: (
      <div className="flex items-center">
        <HeaderLogo />
        <HeaderTitle>Maestro | </HeaderTitle>
        <HeaderSubtitle>Aplicação</HeaderSubtitle>
      </div>
    ),
  },
} as Meta<HeaderContainerProps>

export const Default: StoryObj = {}
