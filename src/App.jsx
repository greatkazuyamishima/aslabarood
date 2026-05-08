import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import SideNavBar from './components/SideBar.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-row bg-[#070b12]">
      <SideNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App
