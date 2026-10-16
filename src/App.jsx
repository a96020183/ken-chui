import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectTapAble from './pages/ProjectTapAble.jsx'
import ProjectPPA from './pages/ProjectPPA.jsx'
import ProjectBNP from './pages/ProjectBNP.jsx'
import ProjectYao from './pages/ProjectYao.jsx'
import ProjectJinYun from './pages/ProjectJinYun.jsx'
import ProjectBeacon from './pages/ProjectBeacon.jsx'
import CV from './pages/CV.jsx'
import NotFound from './pages/NotFound.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { LangProvider, langFromPath, localPath } from './i18n.jsx'

const pages = [
  ['/', Home],
  ['/cv', CV],
  ['/projects/tapable-buildmode', ProjectTapAble],
  ['/projects/ppa-hackathon', ProjectPPA],
  ['/projects/bnp-insurhack', ProjectBNP],
  ['/projects/yaoguang-whale', ProjectYao],
  ['/projects/jinyun-branding', ProjectJinYun],
  ['/projects/atcc-beacon', ProjectBeacon],
]

// 換頁回到頂端；切換語言時停在原本位置；有 #錨點就捲到那裡
function ScrollManager() {
  const { pathname, hash, state } = useLocation()
  useEffect(() => {
    if (state && typeof state.keepScroll === 'number') {
      window.scrollTo({ top: state.keepScroll, behavior: 'instant' })
      return
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, state])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)
  return (
    <LangProvider lang={lang}>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <ScrollManager />
        <Nav />
        <div className="flex-1">
          <Routes>
            {['zh', 'en'].flatMap((l) =>
              pages.map(([path, Page]) => <Route key={l + path} path={localPath(path, l)} element={<Page />} />),
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LangProvider>
  )
}
