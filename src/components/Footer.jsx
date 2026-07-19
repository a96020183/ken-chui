import React from 'react'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-mute sm:flex-row">
        <div>© {new Date().getFullYear()} {profile.name}（{profile.nameZh}）</div>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">Email</a>
          <a href={profile.cv} target="_blank" rel="noreferrer" className="transition hover:text-white">履歷</a>
        </div>
      </div>
    </footer>
  )
}
