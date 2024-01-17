import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function LogoMaestro({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111 107"
      className={cn('fill-zinc-100', className)}
    >
      <path d="M59.15 0h1.07q7.75 1.36 7.95 8.5.11 3.93-3.26 6.69c-6.84 5.61-15.9-1.94-12.74-9.88Q53.83 1.13 59.15 0Z" />
      <ellipse rx="10.43" ry="10.25" transform="rotate(86.5 33.491 65.305)" />
      <circle cx="17.15" cy="25.94" r="7.17" />
      <ellipse rx="19.88" ry="19.55" transform="rotate(88.8 3.328 52.283)" />
      <circle cx="8.54" cy="69.73" r="7.9" />
      <ellipse rx="11.67" ry="11.48" transform="rotate(90.3 11.574 87.347)" />
      <path d="M48.38 107h-2.6q-5.14-1.36-7.46-5.47c-5.25-9.34 5.92-20.17 14.72-13.61 8.11 6.05 4.62 17-4.66 19.08Z" />
    </svg>
  )
}
