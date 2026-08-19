import { NavLink } from 'react-router-dom'

import './Nav.css'

function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" end className="wordmark nav-logo">
        Maryum Akram
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Work
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Contact
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Blog
        </NavLink>
      </nav>
    </header>
  )
}

export default Nav
