import React from "react";
import Link from 'next/link'
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Oller Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hello, {user.email} </span>}
      {user && <LogoutButton />}
    </nav>
  )
}
