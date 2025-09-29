import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Link to="/">Default</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}