import { Component, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
const Work = lazy(() => import('./pages/Work.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
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

// Lightweight loader shown only while a lazy route chunk downloads (~20-45 KiB).
function RouteLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, background: '#1a2332', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ width: 34, height: 34, border: '3px solid #0d7a6e', borderTopColor: '#2fb5a2', borderRadius: '50%', animation: 'mp-spin 1s linear infinite' }} />
      <p style={{ margin: 0, color: '#fafaf8', opacity: 0.85, fontSize: 14 }}>Loading…</p>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Suspense fallback={<RouteLoader />}><Work /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<RouteLoader />}><Contact /></Suspense>} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  )
}

export default App
