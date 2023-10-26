import React from "react";
import Link from 'next/link'

export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Oller Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email} </span>}
    </nav>
  )
}
