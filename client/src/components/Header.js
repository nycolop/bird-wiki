import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <img id="logo" src="../resources/birdLogo.png" alt="logo" />
      <Link to="/" id="header"><h1>Bird-Wiki</h1></Link>
      <Link to="/Login" id="login">login</Link>
    </header>
  )
} 