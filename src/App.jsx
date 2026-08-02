import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Landing from './pages/Landing.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
