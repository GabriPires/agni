import type { StoryObj, Meta } from '@storybook/react'
import {
  SidebarMinimalRootProps,
  SidebarMinimalRoot,
  SidebarMinimalLink,
} from '@agni-ui/react'
import { Mail, TestTube2, Users } from 'lucide-react'

export default {
  title: 'Pages/Sidebar Minimal',
  component: SidebarMinimalRoot,
  args: {
    children: (
      <>
        <SidebarMinimalLink name="Mail">
          <Mail className="h-4 w-4" />
        </SidebarMinimalLink>

        <SidebarMinimalLink name="Users">
          <Users className="h-4 w-4" />
        </SidebarMinimalLink>

        <SidebarMinimalLink name="Tests">
          <TestTube2 className="h-4 w-4" />
        </SidebarMinimalLink>
      </>
    ),
  },
} as Meta<SidebarMinimalRootProps>

export const Default: StoryObj = {}
