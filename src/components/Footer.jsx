import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, LINKEDIN_URL } from '../siteConfig.js'
import './Footer.css'

const GITHUB_URL = 'https://github.com/MaryumAkram16'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-identity">
          <span className="wordmark">Maryum Akram</span>
          <span className="footer-location">Lahore, Pakistan</span>
        </div>

        <div className="footer-links">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <Link to="/blog">Blog</Link>
          <a
            className="footer-cv"
            href={`${import.meta.env.BASE_URL}Maryum_Akram_Resume.pdf`}
            download="Maryum_Akram_Resume.pdf"
          >
            Download CV
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

        <p className="footer-note">Built with React + Vite, deployed on GitHub Pages.</p>
      </div>
    </footer>
  )
}

export default Footer
