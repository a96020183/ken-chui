import React from 'react'
import { profile } from '../data/profile.js'
import { LLink, useT } from '../i18n.jsx'

export default function Footer() {
  const t = useT()
  const a = 'text-ink2 transition duration-150 ease-out hover:text-ink'
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-5 py-8 text-[13.5px] text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>{profile.nameZh} {profile.name} · {t('台北', 'Taipei')}</div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={`mailto:${profile.email}`} className={a}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={a}>GitHub</a>
          <LLink to="/cv" className={a}>{t('履歷', 'CV')}</LLink>
        </div>
      </div>
    </footer>
  )
}
