import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

export default function Nav() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={profile.photo} alt={profile.name} className="h-9 w-9 rounded-full object-cover ring-1 ring-line" />
          <div className="leading-tight">
            <div className="text-sm font-bold">{profile.name}</div>
            <div className="text-[11px] text-mute">{profile.nameZh}・作品集</div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {!home && <Link to="/" className="rounded-lg px-3 py-1.5 text-mute transition hover:text-white hover:bg-white/5">← 首頁</Link>}
          {home && <a href="#projects" className="rounded-lg px-3 py-1.5 text-mute transition hover:text-white hover:bg-white/5">作品</a>}
          {home && <a href="#about" className="rounded-lg px-3 py-1.5 text-mute transition hover:text-white hover:bg-white/5">關於</a>}
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-1.5 text-mute transition hover:text-white hover:bg-white/5">GitHub</a>
          <Link to="/cv" className="rounded-lg bg-brand px-3 py-1.5 font-semibold text-[#231600] transition hover:brightness-110">履歷</Link>
        </nav>
      </div>
    </header>
  )
}
