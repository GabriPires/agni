import { ComponentProps, PropsWithChildren } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Button } from '../ui/button'

export interface SidebarMinimalRootProps extends ComponentProps<'div'> {}

export function SidebarMinimalRoot({ children }: ComponentProps<'div'>) {
  return (
    <div className="flex h-full w-16 flex-col items-center gap-4 border-r bg-background py-4">
      {children}
    </div>
  )
}

export interface SidebarMinimalLinkProps {
  name: string
}

export function SidebarMinimalLink({
  children,
  name,
}: PropsWithChildren<SidebarMinimalLinkProps>) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="pointer-events-none">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
