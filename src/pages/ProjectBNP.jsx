import React from 'react'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'bnp-insurhack')

const shots = [
  { src: '/bnp/cover.png', cap: '提案封面：保包巴士' },
  { src: '/bnp/business-model.png', cap: '商業模式重塑：從「賣保單」到「訂閱生活」' },
  { src: '/bnp/pricing.png', cap: '三層級訂閱方案（月費 99 / 199 / 299 起）' },
  { src: '/bnp/tech.png', cap: '技術可行性：SHA-256 資料脫敏對接（Data Clean Room）' },
  { src: '/bnp/funnel.png', cap: '第一年用戶獲取漏斗：5 萬好友 → 1,000 訂閱' },
  { src: '/bnp/economics.png', cap: '經濟模型：單位經濟、CAC 回收、情境測試' },
]

function Stat({ big, label }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-4 text-center">
      <div className="text-2xl font-black text-brand md:text-3xl">{big}</div>
      <div className="mt-1 text-[12px] text-mute">{label}</div>
    </div>
  )
}
function Section({ kicker, title, children }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      {kicker && <div className="mb-1 text-[13px] font-bold text-cyan">{kicker}</div>}
      <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
function Card({ title, children, tone = 'brand' }) {
  const c = tone === 'cyan' ? 'text-cyan' : tone === 'mint' ? 'text-mint' : tone === 'red' ? 'text-[#F26D6D]' : 'text-brand'
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className={`mb-2 font-bold ${c}`}>{title}</div>
      <div className="text-[14px] leading-relaxed text-white/85">{children}</div>
    </div>
  )
}

export default function ProjectBNP() {
  return (
    <main>
      {/* HERO */}
      <section className="pp-ring border-b border-line/60">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand/15 px-3 py-1 text-[13px] font-bold text-brand">{p.award}</span>
            <span className="text-[13px] text-mute">{p.period}</span>
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">{p.title}</h1>
          <p className="mt-3 text-[15px] font-semibold text-cyan">{p.host}</p>
          <p className="mt-0.5 text-[13px] text-mute">{p.event}</p>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/85">{p.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {p.figma && (
              <a href={p.figma} target="_blank" rel="noreferrer"
                className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] shadow-glow transition hover:brightness-110">▶ 開啟 Figma 互動原型</a>
            )}
            <a href={p.pdf} target="_blank" rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">下載完整企劃書 PDF</a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stat big="🥈 第二名" label="競賽成績" />
            <Stat big="5 人團隊" label="我負責商業／財務／技術可行性" />
            <Stat big="42 頁" label="完整商業企劃書" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我負責的部分" tone="brand">
            提案發想（idea）、<b className="text-white">商業模式</b>、<b className="text-white">財務模型</b>與<b className="text-white">技術可行性</b>——
            也就是整個提案的策略與商業論證核心。
          </Card>
          <Card title="團隊分工" tone="cyan">
            五人團隊、由林亭汝擔任組長；心理測驗設計與 UI 由其他成員負責。
            <span className="text-mute"> 我聚焦在「這門生意成不成立、錢怎麼算、技術做不做得到」。</span>
          </Card>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          台灣壽險市場已高度飽和（投保率 70.9%、人均 2.6 張），成長停滯；
          但 18–29 歲再投保意願高達 <b className="text-white">82%</b>，卡關的是「沒預算、保費太貴」。
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="不想買" tone="red">傳統業務推銷讓年輕人有防備心，年繳保費拿去跟 iPhone 比價。</Card>
          <Card title="看不懂" tone="brand">條款艱澀、流程繁瑣、資訊不透明，投保門檻高。</Card>
          <Card title="沒感覺" tone="cyan">一年只接觸一次（繳費時），保險與日常生活脫節。</Card>
        </div>
      </Section>

      {/* 解法 idea */}
      <Section kicker="THE IDEA" title="保包巴士：把保險變成生活服務">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="① 情境觸發" tone="brand">訂機票、辦健身卡等生活時刻，系統經 LINE 主動推播個人化保障建議，讓保險「即時有感」。</Card>
          <Card title="② 訂閱制" tone="cyan">以每月 99 元起的小額月費取代一次性年繳決策，降低門檻、養成長期保障習慣。</Card>
          <Card title="③ 點數制" tone="mint">健康行為、續訂、分享累積點數折抵保費，形成「越健康 → 越便宜 → 越想續訂」的飛輪。</Card>
        </div>
      </Section>

      {/* 商業模式 */}
      <Section kicker="BUSINESS MODEL" title="商業模式：從賣保單到經營會員">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="三階段策略" tone="brand">
            <b className="text-white">圈地</b>（低毛利訂閱意外險網羅客群）→
            <b className="text-white"> 留存</b>（高頻互動 + 點數養成）→
            <b className="text-white"> 變現</b>（未來轉化高毛利壽險）。用戰略性讓利換取數據資產與長期關係。
          </Card>
          <Card title="為何做低毛利訂閱？" tone="cyan">
            傳統獲客成本高、且中間是數據黑盒子。訂閱制讓一年接觸 12 次以上，
            累積「未投保前」的生活情境與風險偏好——這是壽險業稀缺的第一方數據資產。
          </Card>
        </div>
      </Section>

      {/* 財務模型 */}
      <Section kicker="FINANCIALS" title="財務模型：這門生意算得過來">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="單位經濟" tone="brand">
            月費 199 − 變動成本 11 = <b className="text-white">每人每月貢獻約 188 元</b>，每位訂閱會員皆為正向單位貢獻，訂閱本身不虧損。
          </Card>
          <Card title="CAC 回收" tone="cyan">
            CAC 200–500 元，留存超過 <b className="text-white">3 個月即可回收</b>；1,000 位會員年化經常性收入約 <b className="text-white">240 萬元</b>。
          </Card>
        </div>
        <div className="mt-4">
          <Card title="三情境壓力測試（風險控管）" tone="mint">
            保守（回收 564 元，不虧）／基準（1,128 元，現金流健康）／樂觀（2,256 元，高 LTV）——
            即使不計壽險轉換，模型仍成立。並設計了自動化抵銷成本、逆選擇防火牆、退訂財務門檻三道防線。
          </Card>
        </div>
      </Section>

      {/* 技術可行性 */}
      <Section kicker="FEASIBILITY" title="技術可行性：合規又可落地">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="LINE 原生體驗" tone="brand">
            LINE 官方帳號 + LIFF + LINE Pay，完成 KYC、試算、付款全流程，無需下載獨立 App，大幅降低成本與棄單率。
          </Card>
          <Card title="零個資外洩的精準行銷" tone="cyan">
            異業（Klook/KKday）資料先經 <b className="text-white">SHA-256 雜湊</b>，於 Data Clean Room 只比對「雙方共同用戶」，
            落實個資最小化——合規地做到場景觸發。
          </Card>
        </div>
        <p className="mt-4 text-[13px] text-mute">後端以 Make.com 流程自動化 + 雲端 Server/DB 組成，MVP 每月營運成本僅數千元，屬輕量、可快速擴張的模式。</p>
      </Section>

      {/* 截圖 */}
      <Section kicker="DECK" title="提案畫面精選">
        <div id="shots" className="grid gap-5 md:grid-cols-2">
          {shots.map((s) => (
            <a key={s.src} href={s.src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-line bg-ink2">
              <img src={s.src} alt={s.cap} loading="lazy" className="w-full transition group-hover:opacity-90" />
              <div className="px-4 py-3 text-[13px] text-white/80">{s.cap}</div>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={p.pdf} target="_blank" rel="noreferrer" className="inline-block rounded-xl bg-brand px-6 py-3 font-bold text-[#231600] transition hover:brightness-110">下載完整企劃書（PDF）</a>
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-8 text-center">
          <div className="text-lg font-bold">想聊聊產品或合作？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            <a href={p.pdf} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">下載企劃書</a>
          </div>
        </div>
      </section>
    </main>
  )
}
