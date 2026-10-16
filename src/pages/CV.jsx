import React from 'react'
import { profile, awards } from '../data/profile.js'
import { LLink, useT, useTitle } from '../i18n.jsx'
import { Container } from '../components/ui.jsx'

// 履歷：畫面與列印（存 PDF）共用同一份版面；列印時隱藏導覽列與按鈕
function Block({ title, children }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="border-b border-ink pb-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function CV() {
  const t = useT()
  useTitle('履歷 · 徐浩華 Ken Chui', 'CV · Ken Chui')
  return (
    <main>
      <style>{`@media print { @page { size: A4; margin: 14mm; } .cv-sheet { padding: 0 !important; } }`}</style>
      <Container className="cv-sheet py-10 sm:py-14">
        <div className="no-print mb-10 flex items-center justify-between gap-4">
          <LLink to="/" className="text-[13px] text-mute transition hover:text-ink">← {t('回首頁', 'Home')}</LLink>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition duration-150 ease-out hover:bg-[#262B33]"
          >
            {t('列印／存成 PDF', 'Print / save as PDF')}
          </button>
        </div>

        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[44px]">
              {t(`${profile.nameZh} ${profile.name}`, `Ken Chui ${profile.nameZh}`)}
            </h1>
            <p className="mt-2 text-[17px] text-ink2">{t('CMoney AI 產品經理 · TapAble 共同創辦人', 'AI Product Manager, CMoney · Co-founder, TapAble')}</p>
          </div>
          <ul className="space-y-1 text-[14px] text-ink2 sm:text-right">
            <li><a href={`mailto:${profile.email}`} className="hover:text-accent">{profile.email}</a></li>
            <li className="tnum">{profile.phone}</li>
            <li>{t(profile.location)} · <a href={profile.github} className="hover:text-accent">github.com/a96020183</a></li>
            <li>ken-chui.vercel.app{t('', '/en')}</li>
          </ul>
        </header>

        <p className="mt-8 max-w-3xl text-[15.5px] leading-[1.75] text-ink2">{t(profile.about)[0]}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_17rem] print:grid-cols-[1fr_14rem] print:gap-8">
          <div className="space-y-12">
            <Block title={t('工作經歷', 'Experience')}>
              <ol className="space-y-7">
                {profile.experience.map((e) => (
                  <li key={e.org + e.role.en} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-[16px] font-semibold text-ink">{t(e.role)} <span className="font-normal text-mute">· {e.org}</span></h3>
                      <span className="tnum text-[13.5px] text-mute">{t(e.period)}</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-line2">
                      {e.points.map((pt) => <li key={pt.en} className="text-[14.5px] leading-[1.65] text-ink2">{t(pt)}</li>)}
                    </ul>
                  </li>
                ))}
                {profile.earlier.items.map((e) => (
                  <li key={t(e.org)} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-[16px] font-semibold text-ink">{t(e.role)} <span className="font-normal text-mute">· {t(e.org)}</span></h3>
                      <span className="text-[13.5px] text-mute">{t('香港', 'Hong Kong')}</span>
                    </div>
                    <p className="mt-1.5 text-[14.5px] leading-[1.65] text-ink2">{t(e.text)}</p>
                  </li>
                ))}
              </ol>
            </Block>

            <Block title={t('得獎紀錄', 'Awards')}>
              <ul className="divide-y divide-line">
                {awards.map((a, i) => (
                  <li key={i} className="grid grid-cols-[4.5rem_1fr] gap-3 py-2.5 text-[14px] leading-snug">
                    <span className="tnum text-mute">{a.date}</span>
                    <span>
                      <span className="font-semibold text-ink">{t(a.result)}</span>
                      <span className="text-ink2"> · {t(a.comp)}</span>
                      {a.work !== '—' && <span className="text-mute"> · {t(a.work)}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="space-y-10">
            <Block title={t('學歷', 'Education')}>
              <ul className="space-y-4">
                {profile.education.map((ed) => (
                  <li key={t(ed.school)}>
                    <div className="text-[14.5px] font-semibold text-ink">{t(ed.school)}</div>
                    <div className="text-[14px] text-ink2">{t(ed.dept)}</div>
                    <div className="text-[13px] text-mute">{t(ed.note)}</div>
                  </li>
                ))}
              </ul>
            </Block>
            <Block title={t('技能', 'Skills')}>
              <dl className="space-y-3">
                {profile.skills.map((g) => (
                  <div key={t(g.label)}>
                    <dt className="text-[13px] text-mute">{t(g.label)}</dt>
                    <dd className="mt-0.5 text-[14px] leading-relaxed text-ink2">{g.items.map((it) => t(it)).join(t('、', ', '))}</dd>
                  </div>
                ))}
              </dl>
            </Block>
            <Block title={t('語言', 'Languages')}>
              <ul className="space-y-1 text-[14px] text-ink2">
                {profile.languages.map((l) => <li key={l.en}>{t(l)}</li>)}
              </ul>
            </Block>
            <Block title={t('證照', 'Certifications')}>
              <ul className="space-y-1 text-[14px] text-ink2">
                {profile.certs.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Block>
          </aside>
        </div>
      </Container>
    </main>
  )
}
