import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectPPA from './pages/ProjectPPA.jsx'
import ProjectBNP from './pages/ProjectBNP.jsx'
import ProjectYao from './pages/ProjectYao.jsx'
import ProjectJinYun from './pages/ProjectJinYun.jsx'
import ProjectBeacon from './pages/ProjectBeacon.jsx'
import CV from './pages/CV.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ppa-hackathon" element={<ProjectPPA />} />
        <Route path="/projects/bnp-insurhack" element={<ProjectBNP />} />
        <Route path="/projects/yaoguang-whale" element={<ProjectYao />} />
        <Route path="/projects/jinyun-branding" element={<ProjectJinYun />} />
        <Route path="/projects/atcc-beacon" element={<ProjectBeacon />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </div>
  )
}
