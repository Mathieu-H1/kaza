import { Link } from "react-router-dom";

import React from 'react'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a_propos">A Propos</Link>
    </nav>
  )
}

export default Header