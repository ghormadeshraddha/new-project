import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function Header() {
  return (
    <>
      <nav> 
          <div className="name_div">
            <h1 className="head_name"> SHRADDHA GHORMADE </h1>
          </div>

          <div className="Nav_links">
              <Link className="header_link" to="#about" smooth > About</Link>
              <Link className="header_link" to="#portfolio" smooth >  Portfolio  </Link>
              <Link className="header_link" to="#contact" smooth > Contact  </Link>
          </div>
      </nav>
    </>
  )
}

export default Header;