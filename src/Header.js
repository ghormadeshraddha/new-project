import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function Header() {
  return (
    <>
      <div className="Header_div">

        <h1 className="head_name"> SHRADDHA GHORMADE </h1>

        <div className="Nav_links">
          <ul>
            <Link  className="header_link" to="#about"     smooth > About</Link>
            <Link  className="header_link" to="#portfolio" smooth >  Portfolio  </Link>
            <Link  className="header_link" to="#contact"   smooth > Contact  </Link>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Header;