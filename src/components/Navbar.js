import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <h1 className="logo">VMBO 2022</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/organization">Organization</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
