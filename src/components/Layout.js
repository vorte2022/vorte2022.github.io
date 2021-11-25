import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Website created by Dr. Tiago Prince Sales.</p>
      </footer>
    </div>
  )
}
