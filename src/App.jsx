import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SideNavBar from './components/SideBar.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-row bg-[#070b12]">
      <SideNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
