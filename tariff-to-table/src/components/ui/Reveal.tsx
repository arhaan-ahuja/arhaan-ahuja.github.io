import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}

// Content renders statically — no scroll-triggered animation.
export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>
}
