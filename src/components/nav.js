import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row-reverse",
        position: "fixed",
        top: "0",
        right: "0",
      }}
    >
      <Link style={{ margin: "0 10px" }} to="/dev-tools">
        Dev Tools
      </Link>
      <Link style={{ margin: "0 10px" }} to="/blog">
        Blog
      </Link>
      <Link style={{ margin: "0 10px" }} to="/">
        Home
      </Link>
    </nav>
  )
}
