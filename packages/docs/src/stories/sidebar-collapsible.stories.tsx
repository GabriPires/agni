import type { StoryObj, Meta } from '@storybook/react'
import {
  SidebarCollapsibleRootProps,
  SidebarCollapsibleRoot,
  SidebarCollapsibleLink,
  SidebarCollapsibleLinkGroup,
} from '@agni-ui/react'
import { Activity, Edit, Mail, TestTube2, Users } from 'lucide-react'

export default {
  title: 'Pages/Sidebar Collapsible',
  component: SidebarCollapsibleRoot,
  args: {
    children: (
      <>
        <SidebarCollapsibleLink name="Mail">
          <Mail className="h-4 w-4" />
        </SidebarCollapsibleLink>

        <SidebarCollapsibleLink name="Users">
          <Users className="h-4 w-4" />
        </SidebarCollapsibleLink>

        <SidebarCollapsibleLink name="Tests">
          <TestTube2 className="h-4 w-4" />
        </SidebarCollapsibleLink>

        <SidebarCollapsibleLinkGroup name="Actions" icon={Activity}>
          <SidebarCollapsibleLink name="Edit">
            <Edit className="h-4 w-4" />
          </SidebarCollapsibleLink>
        </SidebarCollapsibleLinkGroup>
      </>
    ),
  },
} as Meta<SidebarCollapsibleRootProps>

export const Default: StoryObj = {}
