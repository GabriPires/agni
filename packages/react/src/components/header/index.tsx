import { cn } from '@/lib/utils'
import { ComponentProps, forwardRef } from 'react'
import { LogoVivo } from '../logos/logo-vivo'
import { LogoMaestro } from '../logos/logo-maestro'

export interface HeaderContainerProps extends ComponentProps<'header'> {}

const HeaderContainer = forwardRef<HTMLHeadingElement, HeaderContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header
        className={cn(
          'relative col-span-full flex h-20 w-full items-center justify-between overflow-hidden border-b bg-agni-violet-500 bg-primary px-6',
          'dark:bg-background',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <LogoVivo className="absolute left-12 top-[-32px] w-48 opacity-10" />
      </header>
    )
  },
)

HeaderContainer.displayName = 'HeaderContainer'

function HeaderLogo({ className, ...props }: ComponentProps<'image'>) {
  return (
    <LogoMaestro className={cn('w-9 fill-zinc-100', className)} {...props} />
  )
}

HeaderLogo.displayName = 'HeaderLogo'

const HeaderTitle = forwardRef<HTMLHeadingElement, ComponentProps<'h1'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          'ml-4 text-xl font-medium leading-tight text-zinc-100 dark:text-foreground',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h1>
    )
  },
)

HeaderTitle.displayName = 'HeaderTitle'

const HeaderSubtitle = forwardRef<HTMLHeadingElement, ComponentProps<'h1'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          'text-md ml-2 mt-0.5 font-medium leading-tight text-zinc-100 dark:text-foreground',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h2>
    )
  },
)

HeaderSubtitle.displayName = 'HeaderSubtitle'

export { HeaderContainer, HeaderLogo, HeaderTitle, HeaderSubtitle }
