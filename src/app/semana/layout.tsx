import { ReactNode } from 'react'

interface SemanaLayoutProps {
  children: ReactNode
}

export default function SemanaLayout({ children }: SemanaLayoutProps) {
  return <div className="h-svh w-full flex-1 bg-gray-100">{children}</div>
}
