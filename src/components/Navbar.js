import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>VMBO 2022</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/organization">Organization</Link>
      </div>
    </nav>
  )
}
