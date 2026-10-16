import React, { createContext, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 中文在 /，英文在 /en；兩邊頁面一一對應，可直接分享英文網址。
const LangCtx = createContext('zh')

export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh'
}

// '/cv' + 'en' → '/en/cv'；'/' + 'en' → '/en'
export function localPath(path, lang) {
  if (lang !== 'en') return path
  return path === '/' ? '/en' : `/en${path}`
}

// 目前網址換成另一種語言的同一頁
export function switchPath(pathname, toLang) {
  const base = langFromPath(pathname) === 'en' ? (pathname.slice(3) || '/') : pathname
  return localPath(base, toLang)
}

export function LangProvider({ lang, children }) {
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant'
  }, [lang])
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}

// 資料欄位可以是字串，或 { zh, en }
export function tx(v, lang) {
  if (v && typeof v === 'object' && !Array.isArray(v) && ('zh' in v || 'en' in v)) {
    return v[lang] ?? v.zh
  }
  return v
}

// t({ zh, en }) 或 t('中文', 'English')
export function useT() {
  const lang = useLang()
  return (a, b) => (b !== undefined ? (lang === 'en' ? b : a) : tx(a, lang))
}

export function useTitle(zh, en) {
  const lang = useLang()
  useEffect(() => {
    document.title = lang === 'en' ? en : zh
  }, [lang, zh, en])
}

// 站內連結：自動加上 /en
export function LLink({ to, ...rest }) {
  const lang = useLang()
  const [path, hash] = to.split('#')
  return <Link to={localPath(path || '/', lang) + (hash ? `#${hash}` : '')} {...rest} />
}
