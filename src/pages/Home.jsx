import React from 'react'
import { profile, projects, awards, moreWork } from '../data/profile.js'
import { LLink, useT, useTitle } from '../i18n.jsx'
import { Container, Button, Arrow } from '../components/ui.jsx'

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

function SectionHead({ title, aside }) {
  return (
    <div className="mb-10 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink sm:text-[34px]">{title}</h2>
      {aside && <p className="max-w-md text-[14.5px] leading-relaxed text-mute sm:text-right">{aside}</p>}
    </div>
  )
}

function Intro() {
  const t = useT()
  return (
    <section className="border-b border-line">
      <Container className="grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-8">
          <h1 className="text-[44px] font-semibold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[64px] lg:text-[76px]">
            {t(profile.headline).map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <p className="mt-7 max-w-[36rem] text-[18px] leading-[1.65] text-ink2">
            <span className="font-semibold text-ink">{t(`我是${profile.nameZh}（${profile.name}）。`, `I’m Ken Chui (${profile.nameZh}). `)}</span>
            {t(profile.lede)}
          </p>
          <div className="no-print mt-9 flex flex-wrap gap-3">
            <Button primary to="/#work">{t('看作品', 'See the work')}</Button>
            <Button to="/cv">{t('履歷', 'CV')}</Button>
            <Button href={`mailto:${profile.email}`}>{t('寫信給我', 'Email me')}</Button>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pt-2">
          <img
            src={profile.photo}
            alt={t('徐浩華的照片', 'Photo of Ken Chui')}
            className="h-36 w-28 rounded-xl object-cover object-top sm:h-44 sm:w-36"
          />
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {profile.now.map((n) => (
              <div key={n.text.en} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5">
                <dt className="text-[13.5px] text-mute">{t(n.label)}</dt>
                <dd className="text-[14.5px] leading-snug text-ink">
                  <LLink to={n.to} className="transition duration-150 ease-out hover:text-accent">{t(n.text)}</LLink>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  )
}

function FeaturedRow({ p }) {
  const t = useT()
  return (
    <article className="group grid gap-6 border-t border-line py-10 first:border-t-0 first:pt-0 sm:py-12 lg:grid-cols-12 lg:gap-10">
      <LLink to={`/projects/${p.slug}`} className="block self-start overflow-hidden rounded-xl border border-line bg-paper2 lg:col-span-6" tabIndex={-1} aria-hidden="true">
        <img
          src={p.cover}
          alt=""
          loading="lazy"
          className="aspect-video w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.015]"
        />
      </LLink>
      <div className="flex flex-col lg:col-span-6 lg:py-2">
        <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[28px]">
          <LLink to={`/projects/${p.slug}`} className="transition duration-150 ease-out hover:text-accent">{t(p.title)}</LLink>
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-mute">
          <span className="font-semibold text-ink">{t(p.result)}</span> · {t(p.org)} · <span className="tnum">{t(p.period)}</span>
        </p>
        <p className="mt-5 text-[16px] leading-[1.7] text-ink2">{t(p.hook)}</p>
        {p.mine && (
          <p className="rule-solid mt-6 pl-4 text-[14px] leading-relaxed text-ink2">
            <span className="font-semibold text-ink">{t('我負責', 'My part')}</span> · {t(p.mine)}
          </p>
        )}
        <div className="mt-7">
          <LLink to={`/projects/${p.slug}`} className="link inline-flex items-center gap-1.5 text-[14.5px] font-medium">
            {t('看完整案例', 'Read the case study')} <Arrow />
          </LLink>
        </div>
      </div>
    </article>
  )
}

function Work() {
  const t = useT()
  return (
    <section id="work" className="scroll-mt-14 border-b border-line">
      <Container className="py-16 sm:py-24">
        <SectionHead
          title={t('精選作品', 'Selected work')}
          aside={t('每個作品都寫清楚哪些是我做的、哪些是隊友做的。', 'Each project says plainly which parts were mine and which were my teammates\'.')}
        />
        <div>{featured.map((p) => <FeaturedRow key={p.slug} p={p} />)}</div>
      </Container>
    </section>
  )
}

function Experience() {
  const t = useT()
  return (
    <section id="experience" className="scroll-mt-14 border-b border-line bg-paper2">
      <Container className="py-16 sm:py-24">
        <SectionHead title={t('經歷', 'Experience')} />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 text-[16px] leading-[1.75] text-ink2 lg:col-span-4">
            <p>{t(profile.about)[0]}</p>
            <p>{t(profile.about)[2]}</p>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-line border-y border-line">
              {profile.experience.map((e) => (
                <li key={e.org + e.role.en} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink">
                      {t(e.role)}
                      <span className="font-normal text-mute"> · </span>
                      {e.to ? <LLink to={e.to} className="link font-semibold">{e.org}</LLink> : e.org}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt.en} className="text-[15px] leading-[1.7] text-ink2">{t(pt)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tnum order-first text-[14px] text-mute sm:order-none sm:text-right">{t(e.period)}</div>
                </li>
              ))}
            </ol>

            <h3 className="mt-12 text-[15px] font-semibold text-ink">{t(profile.earlier.label)}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {profile.earlier.items.map((e) => (
                <li key={t(e.org)} className="py-4">
                  <div className="text-[15px] text-ink"><span className="font-semibold">{t(e.role)}</span><span className="text-mute"> · {t(e.org)}</span></div>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-ink2">{t(e.text)}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-[15px] font-semibold text-ink">{t('學歷', 'Education')}</h3>
                <ul className="mt-4 space-y-4">
                  {profile.education.map((ed) => (
                    <li key={t(ed.school)}>
                      <div className="text-[15px] font-medium text-ink">{t(ed.school)}</div>
                      <div className="text-[14.5px] text-ink2">{t(ed.dept)}</div>
                      <div className="text-[13.5px] text-mute">{t(ed.note)}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-ink">{t('技能', 'Skills')}</h3>
                <dl className="mt-4 space-y-3">
                  {profile.skills.map((g) => (
                    <div key={t(g.label)} className="grid grid-cols-[6.5rem_1fr] gap-3">
                      <dt className="text-[13.5px] text-mute">{t(g.label)}</dt>
                      <dd className="text-[14.5px] leading-relaxed text-ink2">{g.items.map((it) => t(it)).join(t('、', ', '))}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="text-[13.5px] text-mute">{t('語言', 'Languages')}</dt>
                    <dd className="text-[14.5px] leading-relaxed text-ink2">{profile.languages.map((l) => t(l)).join(t('、', ', '))}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function AwardWork({ a }) {
  const t = useT()
  const label = t(a.work)
  if (a.to) return <LLink to={a.to} className="link">{label}</LLink>
  if (a.href) return <a href={a.href} target="_blank" rel="noreferrer" className="link">{label}</a>
  return <span>{label}</span>
}

function Awards() {
  const t = useT()
  return (
    <section id="awards" className="scroll-mt-14 border-b border-line">
      <Container className="py-16 sm:py-24">
        <SectionHead
          title={t('得獎紀錄', 'Awards')}
          aside={t(`${awards.length} 項，日期以獎狀為準。`, `${awards.length} awards, dated as on the certificates.`)}
        />
        {/* 桌機：表格 */}
        <table className="hidden w-full border-collapse text-left md:table">
          <thead>
            <tr className="border-b border-ink text-[13px] text-mute">
              <th className="w-[6.5rem] py-3 pr-4 font-medium">{t('時間', 'Date')}</th>
              <th className="py-3 pr-6 font-medium">{t('比賽', 'Competition')}</th>
              <th className="w-[13rem] py-3 pr-6 font-medium">{t('結果', 'Result')}</th>
              <th className="w-[14rem] py-3 font-medium">{t('作品', 'Project')}</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((a, i) => (
              <tr key={i} className="border-b border-line align-top text-[14.5px]">
                <td className="tnum py-3.5 pr-4 text-mute">{a.date}</td>
                <td className="py-3.5 pr-6 text-ink">{t(a.comp)}</td>
                <td className="py-3.5 pr-6 font-semibold text-ink">{t(a.result)}</td>
                <td className="py-3.5 text-ink2"><AwardWork a={a} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 手機：清單 */}
        <ul className="divide-y divide-line border-y border-line md:hidden">
          {awards.map((a, i) => (
            <li key={i} className="py-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-ink">{t(a.result)}</span>
                <span className="tnum text-[13px] text-mute">{a.date}</span>
              </div>
              <div className="mt-1 text-[14.5px] leading-snug text-ink2">{t(a.comp)}</div>
              <div className="mt-1 text-[13.5px] text-mute"><AwardWork a={a} /></div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function MoreWork() {
  const t = useT()
  const items = [
    ...others.map((p) => ({ key: p.slug, title: t(p.title), text: t(p.hook), meta: `${t(p.result)} · ${t(p.period)}`, to: `/projects/${p.slug}`, linkLabel: t('看案例', 'Case study') })),
    ...moreWork.map((m) => ({ key: m.title.en, title: t(m.title), text: t(m.text), meta: t(m.period), href: m.href, linkLabel: m.linkLabel ? t(m.linkLabel) : null })),
  ]
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <SectionHead title={t('更多作品', 'More work')} />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.key} className="flex flex-col border-t border-line pt-5">
              <h3 className="text-[17px] font-semibold leading-snug text-ink">{it.title}</h3>
              <div className="mt-1.5 text-[13px] text-mute">{it.meta}</div>
              <p className="mt-2 flex-1 text-[14.5px] leading-[1.7] text-ink2">{it.text}</p>
              {it.to && (
                <LLink to={it.to} className="link mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium">{it.linkLabel} <Arrow /></LLink>
              )}
              {it.href && (
                <a href={it.href} target="_blank" rel="noreferrer" className="link mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium">{it.linkLabel} <Arrow external /></a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  const t = useT()
  return (
    <section>
      <Container className="py-20 sm:py-28">
        <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[48px]">
          {t('有想法，就來聊聊。', 'Let’s talk.')}
        </h2>
        <p className="mt-5 max-w-prose text-[17px] leading-[1.7] text-ink2">
          {t('想聊 AI 產品、合作或任何一個作品，寫信給我最快。', 'For AI products, collaborations or any project here, email is the fastest way to reach me.')}
        </p>
        <div className="no-print mt-9 flex flex-wrap items-center gap-3">
          <Button primary href={`mailto:${profile.email}`}>{profile.email}</Button>
          <Button to="/cv">{t('看履歷', 'View CV')}</Button>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  useTitle('徐浩華 Ken Chui · AI 產品經理', 'Ken Chui · AI Product Manager')
  return (
    <main>
      <Intro />
      <Work />
      <Experience />
      <Awards />
      <MoreWork />
      <Contact />
    </main>
  )
}
