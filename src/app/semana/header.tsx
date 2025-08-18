import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { semanaLogin } from '@/lib/routes'

export default function SemanaHeader() {
  return (
    <div>
      <nav></nav>
      <Link href={semanaLogin}>
        <Button>Entrar</Button>
      </Link>
    </div>
  )
}
