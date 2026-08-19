import { NavLink } from 'react-router-dom'
import { RESUME_URL } from '../siteConfig.js'
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
        <a href={RESUME_URL} download className="nav-cv-link">
          Download CV
        </a>
      </nav>
    </header>
  )
}

export default Nav
