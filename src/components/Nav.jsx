import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { LLink, useLang, useT, switchPath } from '../i18n.jsx'

// 語言切換：換到另一種語言的同一頁，停在原本的捲動位置
function LangSwitch() {
  const lang = useLang()
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const go = (to) => {
    if (to === lang) return
    navigate(switchPath(pathname, to) + hash, { state: { keepScroll: window.scrollY } })
  }
  const item = (code, label, aria) => (
    <button
      type="button"
      onClick={() => go(code)}
      aria-pressed={lang === code}
      aria-label={aria}
      className={`rounded-md px-2 py-1 text-[13px] font-medium transition duration-150 ease-out ${
        lang === code ? 'bg-ink text-white' : 'text-mute hover:text-ink'
      }`}
    >
      {label}
    </button>
  )
  return (
    <div className="flex items-center rounded-lg border border-line p-0.5" role="group" aria-label="Language">
      {item('zh', '中', '切換到中文')}
      {item('en', 'EN', 'Switch to English')}
    </div>
  )
}

export default function Nav() {
  const t = useT()
  const link = 'rounded-md px-2.5 py-1.5 text-[14px] text-ink2 transition duration-150 ease-out hover:text-ink'
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <LLink to="/" className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{profile.name}</span>
          <span className="hidden text-[13px] text-mute sm:inline">{profile.nameZh}</span>
        </LLink>
        <nav className="flex items-center gap-1 sm:gap-2">
          <LLink to="/#work" className={`${link} hidden sm:inline-block`}>{t('作品', 'Work')}</LLink>
          <LLink to="/#experience" className={`${link} hidden sm:inline-block`}>{t('經歷', 'Experience')}</LLink>
          <LLink to="/cv" className={link}>{t('履歷', 'CV')}</LLink>
          <LangSwitch />
        </nav>
      </div>
    </header>
  )
}
