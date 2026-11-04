import { Component, lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
const Work = lazy(() => import('./pages/Work.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Principles = lazy(() => import('./pages/Principles.jsx'))
import './App.css'

// Show a visible fallback + retry button instead of a blank page when
// any unhandled runtime error occurs inside the app.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, color: '#fff', background: '#1a2332', fontFamily: 'system-ui, sans-serif', padding: 24 }}>
          <h1 style={{ margin: 0 }}>Maryum Akram</h1>
          <p style={{ margin: 0, opacity: 0.85, textAlign: 'center' }}>Something went wrong while loading the site. Please try reloading.</p>
          <button
            onClick={() => window.location.reload()}
            style={{ background: '#0d7a6e', color: '#fff', border: 0, borderRadius: 999, padding: '12px 28px', fontSize: 16, cursor: 'pointer' }}
          >
            Reload page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Client-side navigation otherwise keeps the previous page's scroll offset, so
// links like /work#skillsync-ai would land mid-page. On push/replace, scroll to
// the #hash target once the (lazy-loaded) page renders it, or to the top.
// Back/forward (POP) and first load keep the browser's own scroll handling.
function RouteScroll() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  useEffect(() => {
    if (navigationType === 'POP') return undefined
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }
    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let attempts = 0
    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ block: 'start' })
      else if (++attempts < 120) frame = requestAnimationFrame(scrollToTarget)
    }
    scrollToTarget()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, navigationType])
  return null
}

function App() {
  return (
    <ErrorBoundary>
      <RouteScroll />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav />
      <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
      <Footer />
    </ErrorBoundary>
  )
}

export default App
