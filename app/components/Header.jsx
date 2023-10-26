import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/next.svg'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='NextJS logo'
        width={70}
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
