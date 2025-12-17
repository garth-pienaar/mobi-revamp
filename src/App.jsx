import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sports from './pages/Sports'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-steam-darker">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
