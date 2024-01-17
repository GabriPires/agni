import * as Collapsible from '@radix-ui/react-collapsible'
import { ComponentProps, PropsWithChildren, useState } from 'react'
import { Button } from '../ui/button'
import {
  ChevronDown,
  ChevronUp,
  PanelLeftOpen,
  PanelRightOpen,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export interface SidebarCollapsibleRootProps extends ComponentProps<'div'> {}

function SidebarCollapsibleRoot({ children }: SidebarCollapsibleRootProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible.Root
      onOpenChange={setIsOpen}
      className="group flex w-16 flex-col items-center border-r px-3 py-4 transition-all data-[state=open]:w-56 data-[state=open]:items-start"
    >
      <Collapsible.Trigger asChild>
        <Button size="icon" variant="ghost" className="self-end">
          {isOpen ? (
            <PanelRightOpen className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
      </Collapsible.Trigger>
      <>{children}</>
    </Collapsible.Root>
  )
}

interface SidebarLinkGroupProps {
  name: string
  icon: React.ElementType
}

function SidebarCollapsibleLinkGroup({
  name,
  children,
  icon: Icon,
}: PropsWithChildren<SidebarLinkGroupProps>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <Collapsible.Root className="w-full" onOpenChange={setIsOpen}>
          <Collapsible.Trigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Icon className="h-4 w-4" />
                <span className="ml-2 group-data-[state=closed]:hidden">
                  {name}
                </span>
                {isOpen ? (
                  <ChevronUp className="ml-auto h-3 w-3 group-data-[state=closed]:hidden" />
                ) : (
                  <ChevronDown className="ml-auto h-3 w-3 group-data-[state=closed]:hidden" />
                )}
              </Button>
            </TooltipTrigger>
          </Collapsible.Trigger>

          <Collapsible.Content className="group-data-[state=open]:pl-3">
            {children}
          </Collapsible.Content>
        </Collapsible.Root>

        <TooltipContent side="right" className="group-data-[state=open]:hidden">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export interface SidebarCollapsibleLinkProps {
  name: string
}

function SidebarCollapsibleLink({
  children,
  name,
}: PropsWithChildren<SidebarCollapsibleLinkProps>) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 group-data-[state=closed]:h-10 group-data-[state=closed]:w-10"
            asChild
          >
            {children}
            <span className="group-data-[state=closed]:hidden">{name}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="group-data-[state=open]:hidden pointer-events-none"
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export {
  SidebarCollapsibleRoot,
  SidebarCollapsibleLinkGroup,
  SidebarCollapsibleLink,
}
