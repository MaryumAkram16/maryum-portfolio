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
        <NavLink to="/principles" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Principles
        </NavLink>
        <a
          className="nav-cv"
          href={`${import.meta.env.BASE_URL}Maryum_Akram_Resume.pdf`}
          download="Maryum_Akram_Resume.pdf"
        >
          Download CV
        </a>
      </nav>
    </header>
  )
}

export default Nav
