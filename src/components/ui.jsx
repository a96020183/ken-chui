import React from 'react'
import { LLink, useT } from '../i18n.jsx'
import { profile } from '../data/profile.js'

// 全站共用的版面元件。作品頁一律用這些組，不要再自己刻卡片。

export function Arrow({ external = false, className = '' }) {
  return external ? (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`inline-block h-[0.85em] w-[0.85em] ${className}`}>
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`inline-block h-[0.85em] w-[0.85em] ${className}`}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>
}

// 按鈕：primary＝黑底白字；其他＝細框。href 外連、to 站內。
export function Button({ href, to, primary = false, children, className = '' }) {
  const base = `inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-medium transition duration-150 ease-out ${
    primary ? 'bg-ink text-white hover:bg-[#262B33]' : 'border border-line2 text-ink hover:border-ink'
  } ${className}`
  if (to) return <LLink to={to} className={base}>{children}<Arrow /></LLink>
  const ext = href && /^https?:/.test(href)
  return (
    <a href={href} className={base} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}{ext ? <Arrow external /> : null}
    </a>
  )
}

// 作品頁開頭：結果、標題、主辦、一句摘要、行動、事實列（不用數字磚）
export function CaseHeader({ result, period, title, org, event, summary, actions, facts }) {
  const t = useT()
  return (
    <header className="border-b border-line">
      <Container className="pb-12 pt-10 sm:pb-16 sm:pt-14">
        <LLink to="/#work" className="no-print text-[13px] text-mute transition hover:text-ink">
          ← {t('所有作品', 'All work')}
        </LLink>
        <h1 className="mt-8 max-w-4xl text-[34px] font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[48px]">{title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink2">
          {result && <span className="font-semibold text-ink">{result}</span>}
          {[org, event, period].filter(Boolean).map((x, i) => (
            <span key={i} className={i === 0 && !result ? '' : 'text-mute'}>{(i > 0 || result) ? ' · ' : ''}{x}</span>
          ))}
        </p>
        {summary && <p className="mt-6 max-w-prose text-[17px] leading-[1.7] text-ink2">{summary}</p>}
        {actions && <div className="no-print mt-8 flex flex-wrap gap-3">{actions}</div>}
        {facts && facts.length > 0 && (
          <dl className="mt-12 grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
            {facts.map((f, i) => (
              <div key={i} className="bg-paper px-4 py-4 [&:nth-child(odd)]:pl-0 sm:[&:nth-child(odd)]:pl-4 sm:first:!pl-0">
                <dt className="text-[12.5px] text-mute">{f.label}</dt>
                <dd className="tnum mt-1 text-[17px] font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </header>
  )
}

// 段落：桌機左欄標題、右欄內容；手機上下排
export function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="border-b border-line">
      <Container className="grid gap-6 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[26px]">{title}</h2>
          {aside && <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-mute">{aside}</p>}
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </Container>
    </section>
  )
}

export function Prose({ children, className = '' }) {
  return <div className={`max-w-prose space-y-4 text-[16px] leading-[1.75] text-ink2 [&_b]:font-semibold [&_b]:text-ink ${className}`}>{children}</div>
}

// 分工：我做的（實線）／隊友做的（虛線）
export function Roles({ mine, team }) {
  const t = useT()
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="rule-solid pl-5">
        <div className="text-[13px] font-semibold text-ink">{t('我負責的', 'My part')}</div>
        <div className="mt-2 text-[15px] leading-[1.7] text-ink2 [&_b]:font-semibold [&_b]:text-ink">{mine}</div>
      </div>
      {team && (
        <div className="rule-dashed pl-5">
          <div className="text-[13px] font-semibold text-mute">{t('隊友負責的', 'Teammates')}</div>
          <div className="mt-2 text-[15px] leading-[1.7] text-mute">{team}</div>
        </div>
      )}
    </div>
  )
}

// 並列的小段落（標題＋內文），用細線分隔，不用卡片
export function Items({ cols = 2, items }) {
  const c = cols === 3 ? 'sm:grid-cols-3' : cols === 1 ? '' : 'sm:grid-cols-2'
  return (
    <div className={`grid gap-x-8 gap-y-8 ${c}`}>
      {items.map((it, i) => (
        <div key={i} className="border-t border-line pt-4">
          <h3 className="text-[15px] font-semibold text-ink">{it.title}</h3>
          <div className="mt-2 text-[15px] leading-[1.7] text-ink2 [&_b]:font-semibold [&_b]:text-ink">{it.body}</div>
        </div>
      ))}
    </div>
  )
}

// 條列：每項一條細線
export function List({ items, tone = 'ink' }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it, i) => (
        <li key={i} className={`py-3 text-[15px] leading-[1.7] ${tone === 'mute' ? 'text-mute' : 'text-ink2'} [&_b]:font-semibold [&_b]:text-ink`}>{it}</li>
      ))}
    </ul>
  )
}

// 補充說明／限制：淡灰底
export function Note({ title, children }) {
  return (
    <div className="rounded-xl bg-paper2 px-5 py-4">
      {title && <div className="text-[14px] font-semibold text-ink">{title}</div>}
      <div className={`${title ? 'mt-1.5' : ''} text-[14.5px] leading-[1.7] text-ink2 [&_b]:font-semibold [&_b]:text-ink`}>{children}</div>
    </div>
  )
}

// 內嵌 Demo／影片／Figma
export function Frame({ src, title, height = 'h-[640px]', openHref, openLabel, allow, video = false }) {
  const t = useT()
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-paper2">
      <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2.5">
        <span className="truncate text-[13px] text-mute">{title}</span>
        {openHref && (
          <a href={openHref} target="_blank" rel="noreferrer" className="link ml-auto shrink-0 text-[13px]">
            {openLabel || t('在新分頁開啟', 'Open in new tab')} <Arrow external />
          </a>
        )}
      </div>
      <iframe
        src={src}
        title={title}
        className={`block w-full bg-paper ${video ? 'aspect-video' : height}`}
        loading="lazy"
        allow={allow}
        allowFullScreen={video}
      />
    </figure>
  )
}

export function Figure({ src, alt, caption }) {
  return (
    <figure>
      <a href={src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-line bg-paper2">
        <img src={src} alt={alt || caption || ''} loading="lazy" className="w-full transition duration-200 ease-out hover:opacity-95" />
      </a>
      {caption && <figcaption className="mt-3 text-[13.5px] leading-relaxed text-mute">{caption}</figcaption>}
    </figure>
  )
}

export function Gallery({ shots }) {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
      {shots.map((s) => <Figure key={s.src} src={s.src} caption={s.caption} />)}
    </div>
  )
}

// 作品頁結尾
export function CaseFooter({ children }) {
  const t = useT()
  return (
    <section>
      <Container className="py-16 sm:py-24">
        <h2 className="max-w-2xl text-[26px] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[32px]">
          {t('想多聊聊這個專案？', 'Want to talk about this project?')}
        </h2>
        <div className="no-print mt-8 flex flex-wrap gap-3">
          <Button primary href={`mailto:${profile.email}`}>{t('寫信給我', 'Email me')}</Button>
          <Button to="/cv">{t('看履歷', 'View CV')}</Button>
          {children}
        </div>
      </Container>
    </section>
  )
}
