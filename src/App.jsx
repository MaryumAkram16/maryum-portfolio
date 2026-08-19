import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
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

function App() {
  return (
    <ErrorBoundary>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  )
}

export default App
