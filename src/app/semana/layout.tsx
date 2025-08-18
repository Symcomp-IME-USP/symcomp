import { ReactNode } from 'react'

import SemanaHeader from './header'

interface SemanaLayoutProps {
  children: ReactNode
}

export default function SemanaLayout({ children }: SemanaLayoutProps) {
  return (
    <div className="h-svh w-full flex-1 bg-gray-100">
      <SemanaHeader />
      {children}
    </div>
  )
}
