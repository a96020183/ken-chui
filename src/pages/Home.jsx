import React from 'react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../data/profile.js'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="pp-ring">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-[12px] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> 開放全職機會
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              嗨，我是 <span className="pp-grad-text">{profile.name}</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-white/90 md:text-xl">{profile.title}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">{profile.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] shadow-glow transition hover:brightness-110">看我的作品 ↓</a>
              <Link to="/cv" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">履歷</Link>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">GitHub</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="animate-floaty relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand/30 to-cyan/30 blur-2xl" />
              <img src={profile.photo} alt={profile.name}
                className="relative h-52 w-52 rounded-3xl object-cover ring-1 ring-line shadow-card md:h-64 md:w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* 能力光譜 */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-black md:text-3xl">四種能力，一個完整的產品人</h2>
          <p className="mt-1 text-sm text-mute">從發現問題、算清商業帳、做出產品到推廣成長——產品的每一段我都走過一遍。</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: '能發現真問題', d: '從 0 洞察社會痛點並設計解法', tag: '瑤光深鯨 · 無障礙系統', color: 'text-mint' },
              { k: '能算商業帳', d: '商業模式與財務模型論證', tag: '法巴 Cardif · 保包巴士', color: 'text-cyan' },
              { k: '能親手做', d: '全端打造可互動產品並上雲', tag: 'AWS · PressPlay AI', color: 'text-brand' },
              { k: '能推廣成長', d: '品牌行銷與聲量成長策略', tag: '金孕獎 · 推廣策略', color: 'text-cyan' },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-line bg-card p-5 transition hover:border-brand/40">
                <div className={`text-lg font-black ${s.color}`}>{s.k}</div>
                <div className="mt-1.5 text-[13px] leading-relaxed text-white/80">{s.d}</div>
                <div className="mt-3 border-t border-line/60 pt-2 text-[11px] text-mute">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">精選作品</h2>
            <p className="mt-1 text-sm text-mute">競賽作品與專案，點入看完整 case study 與可互動 Demo。</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const inner = (
              <>
                <div className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br blur-2xl transition ${p.featured ? 'from-brand/40 to-cyan/20' : 'from-brand/20 to-cyan/10 group-hover:from-brand/40'}`} />
                <div className="relative">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {p.featured && (
                      <span className="rounded-md bg-brand px-2 py-0.5 text-[11px] font-black text-[#231600]">★ 代表作</span>
                    )}
                    {p.host && (
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[13px] font-black tracking-wide text-white ring-1 ring-line">{p.host}</span>
                    )}
                    <span className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${p.ongoing ? 'bg-mint/15 text-mint' : 'bg-brand/15 text-brand'}`}>{p.award}</span>
                    <span className="ml-auto text-[12px] text-mute">{p.period}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{p.title}</h3>
                  {p.event && <p className="mt-1 text-[12.5px] font-semibold text-cyan">{p.event}</p>}
                  <p className="mt-3 text-[14px] leading-relaxed text-mute line-clamp-4">{p.summary}</p>
                  {p.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 5).map((t) => (
                        <span key={t} className="rounded-md border border-line px-2 py-0.5 text-[11px] text-white/70">{t}</span>
                      ))}
                    </div>
                  )}
                  {!p.ongoing && (
                    <div className="mt-5 flex items-center gap-4 text-[13px] font-semibold">
                      <span className="text-brand transition group-hover:gap-2">查看 case study →</span>
                      {p.hasDemo && <span className="text-cyan">含可互動 Demo</span>}
                      {p.figma && <span className="text-cyan">含 Figma 原型</span>}
                    </div>
                  )}
                  {p.ongoing && <div className="mt-5 text-[13px] font-semibold text-mute">賽後公開完整內容</div>}
                </div>
              </>
            )
            const base = `group relative overflow-hidden rounded-2xl bg-card p-6 transition ${p.featured ? 'border-2 border-brand/70 shadow-glow' : 'border border-line'} ${p.ongoing ? 'opacity-80' : 'hover:border-brand/50 hover:shadow-card'}`
            return p.ongoing
              ? <div key={p.slug} className={base}>{inner}</div>
              : <Link key={p.slug} to={`/projects/${p.slug}`} className={base}>{inner}</Link>
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-line/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">關於我</h2>
            <p className="mt-2 text-sm text-mute">{profile.location}・{profile.nameZh}</p>
          </div>
          <div>
            {profile.intro.map((line, i) => (
              <p key={i} className="mb-3 text-[15px] leading-relaxed text-white/85">{line}</p>
            ))}

            {/* 經歷 */}
            <div className="mt-6">
              <div className="mb-2 text-[13px] font-bold text-white/70">經歷</div>
              {profile.experience.map((e) => (
                <div key={e.org} className="rounded-xl border border-line bg-white/5 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <div className="font-bold text-white">{e.role}<span className="ml-2 text-cyan">{e.org}</span></div>
                    <div className="text-[12px] text-mute">{e.period}</div>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {e.points.map((pt, i) => (
                      <li key={i} className="text-[13px] leading-relaxed text-white/80">• {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 學歷 */}
            <div className="mt-4">
              <div className="mb-2 text-[13px] font-bold text-white/70">學歷</div>
              {profile.education.map((ed) => (
                <div key={ed.school} className="flex flex-wrap items-baseline justify-between gap-1 rounded-xl border border-line bg-white/5 px-4 py-3">
                  <div className="text-[14px] text-white/90"><b>{ed.school}</b> · {ed.dept}</div>
                  <div className="text-[12px] text-mute">{ed.period}</div>
                </div>
              ))}
            </div>

            {/* 技能：產品 + 技術 */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="mb-2 text-[13px] font-bold text-brand">產品能力</div>
                <div className="flex flex-wrap gap-2">
                  {profile.productSkills.map((s) => (
                    <span key={s} className="rounded-lg border border-line bg-white/5 px-2.5 py-1 text-[12px] text-white/85">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-[13px] font-bold text-cyan">技術（差異化）</div>
                <div className="flex flex-wrap gap-2">
                  {profile.techSkills.map((s) => (
                    <span key={s} className="rounded-lg border border-line bg-white/5 px-2.5 py-1 text-[12px] text-white/85">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
              <Link to="/cv" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">履歷</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
