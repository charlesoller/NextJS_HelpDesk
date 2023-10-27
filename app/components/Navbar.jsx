import React from "react";
import Link from 'next/link'
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Oller Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link className="mr-auto" href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email} </span>}
      {user && <LogoutButton />}
    </nav>
  )
}
