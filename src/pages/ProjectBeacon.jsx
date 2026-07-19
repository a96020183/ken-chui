import React from 'react'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'atcc-beacon')

const shots = [
  { src: '/atcc/cover.png', cap: 'BEACON 計畫：主動發現的心理支持系統' },
  { src: '/atcc/problem.png', cap: '孩子需要的不是「被輔導」，而是「自然被接住」' },
  { src: '/atcc/funnel.png', cap: '核心機制：數據驅動 OMO 三層預警漏斗' },
  { src: '/atcc/roblox.png', cap: 'Roblox 遊玩場景：家 → 學校 → 防空洞' },
  { src: '/atcc/channels.png', cap: '校園防線：LINE ARG 校園怪談 + 實體工作坊' },
  { src: '/atcc/impact.png', cap: '從被動熱線到主動預警的社會影響力' },
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

export default function ProjectBeacon() {
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
            <a href={p.pdf} target="_blank" rel="noreferrer"
              className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] shadow-glow transition hover:brightness-110">下載提案簡報 PDF</a>
            <a href="#shots" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">看提案畫面 ↓</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat big="全國 26 強" label="ATCC 初賽決選" />
            <Stat big="45%" label="高風險個案從未接觸資源" />
            <Stat big="三位一體" label="Roblox × ARG × 工作坊" />
            <Stat big="綠黃紅" label="三級預警自動分流" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我負責的部分" tone="brand">
            <b className="text-white">系統機制設計</b>、<b className="text-white">OMO 三層數據漏斗</b>
            （含 Mixpanel 行為數據分析與綠／黃／紅三級預警分流）、<b className="text-white">商業模式與三年財務</b>，
            以及 <b className="text-white">Roblox 場景設計</b>（以 AI 工具快速產出概念視覺）——整個案子的系統與商業骨架。
          </Card>
          <Card title="團隊分工" tone="cyan">
            團隊 E12 / KTV Lab。LINE ARG 校園怪談與實體工作坊由其他成員設計；
            <span className="text-mute"> 其餘（機制、數據、商業、Roblox）基本由我負責。</span>
          </Card>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          台灣兒少自殺通報創 10 年新高，但現有輔導機制<b className="text-white">依賴「主動求助」</b>——
          情緒深淵中的孩子往往開不了口，成為系統看不見的「隱形個案」。
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="求助門檻高" tone="red">越需要幫助，越不敢開口；孩子抗拒被「定義為求助」的嚴肅情境。</Card>
          <Card title="隱形黑數" tone="brand">45% 高風險個案，在危機發生前從未接觸任何心理資源。</Card>
          <Card title="機制失效" tone="cyan">等孩子主動開口時，往往已經太晚——需要「主動發現」。</Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-5 text-[15px] leading-relaxed text-white/85">
          核心洞察：孩子需要的，不是「<b className="text-white">被輔導</b>」，而是「<b className="text-brand">自然被接住</b>」。
        </div>
      </Section>

      {/* 解法 */}
      <Section kicker="THE SOLUTION" title="BEACON：三位一體的主動式心理支持網">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Roblox 數位防空洞" tone="brand">
            孩子熟悉的遊戲場域：佈置自己的家、記錄心情；異常行為時以任務引導進入「防空洞」二次篩檢。全程禁用文字/語音，用雲朵花朵視效表達情緒，杜絕霸凌。
          </Card>
          <Card title="LINE ARG 校園怪談" tone="cyan">
            免安裝文字解謎《尋找失蹤的 K 學姊》，把心理投射測驗藏進懸疑劇情，掃 QR 即玩；「沒有鬼，只有受傷的心」。可大規模、低門檻入校初篩。
          </Card>
          <Card title="喵汪偵探社工作坊" tone="mint">
            實體解謎 + 藝術治療（「雨中的我」投射繪畫），iPad 機台減輕志工負擔，補足數位偵測不到的深層情緒。
          </Card>
        </div>
        <div className="mt-4">
          <Card title="核心機制：數據驅動 OMO 三層預警漏斗" tone="brand">
            第一層<b className="text-white">數據捕捉</b>（匿名記錄行為）→ 第二層 <b className="text-white">Mixpanel AI 預警</b>（量化壓力、自動分級）→
            第三層<b className="text-white">分級接待</b>：綠燈由系統陪伴、黃燈由張老師志工介入、紅燈轉介 1980 專業諮商。
            全程去標籤化、去識別化，讓防護網無痛落實於兒少生活圈。
          </Card>
        </div>
      </Section>

      {/* 商業模式 */}
      <Section kicker="MODEL" title="永續商業模式：不以弱勢獲利">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="三大收入來源" tone="brand">
            企業 ESG 校園採用（5 萬/校/年，校方獲免費教材）＋ Roblox 品牌贊助 ＋ 政府補助（數發部/衛福部/教育部），
            三年推估總營收約 350 萬。
          </Card>
          <Card title="技術與專業分流" tone="cyan">
            「張老師」專注專業輔導，團隊當「技術架構師」；紅燈諮詢補助池回饋弱勢家庭，
            推動被動熱線轉型為可複製的主動預警防護網。
          </Card>
        </div>
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
          <a href={p.pdf} target="_blank" rel="noreferrer" className="inline-block rounded-xl bg-brand px-6 py-3 font-bold text-[#231600] transition hover:brightness-110">下載完整提案簡報（PDF）</a>
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-8 text-center">
          <div className="text-lg font-bold">想聊聊產品或社會創新？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            <a href={p.pdf} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">下載簡報</a>
          </div>
        </div>
      </section>
    </main>
  )
}
