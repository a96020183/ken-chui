import React from 'react'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'jinyun-branding')

const shots = [
  { src: '/jinyun/cover.png', cap: '金孕獎，金色評委陪你孕出健康小將' },
  { src: '/jinyun/swot.png', cap: 'SWOT 分析與改善型策略' },
  { src: '/jinyun/audience.png', cap: '目標客群 / 通路 / 社群 / 影響者分析' },
  { src: '/jinyun/points.png', cap: '網站升級：點數制度（遊戲化）提升黏著度' },
  { src: '/jinyun/wom5t.png', cap: '口碑行銷 5T 框架與活動排程' },
  { src: '/jinyun/impact.png', cap: '預期效益：UGC × 四度分隔理論擴散' },
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

export default function ProjectJinYun() {
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
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stat big="🥈 銀質獎" label="競賽成績" />
            <Stat big="5 人團隊" label="我負責分析・策略・成效" />
            <Stat big="5T + 遊戲化" label="行銷與留存機制" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我負責的部分" tone="brand">
            <b className="text-white">受眾／通路／社群／影響者分析</b>、
            <b className="text-white">網站升級與點數遊戲化</b>、
            <b className="text-white">軟性推廣＋口碑行銷 5T</b>、
            以及<b className="text-white">預期效益與成本預估</b>——策略與執行的主體。
          </Card>
          <Card title="團隊分工" tone="cyan">
            5 人團隊（組長林亭汝，指導黃增隆教授）；組員負責簡報製作與現場報告。
            <span className="text-mute"> 從資料分析、機制設計到成效試算的核心由我完成。</span>
          </Card>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          「金孕獎」是台灣母嬰產業的權威獎項，但<b className="text-white">知名度不足</b>，還沒成為消費者的選擇參考。
          執行單位 MamiGuide 官網月訪問僅約 11 萬，且<b className="text-white">59% 用戶看完第一頁就離開</b>。
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="聲量不足" tone="red">獎項權威但消費者認知低，缺乏能引爆討論的話題與內容。</Card>
          <Card title="互動不足" tone="brand">官網跳出率高、停留短，沒有讓用戶留下來的理由。</Card>
          <Card title="市場機會" tone="cyan">99% 新手爸媽遇問題會上網找答案——只要有專業內容＋好的平台就能承接。</Card>
        </div>
      </Section>

      {/* 策略與我的貢獻 */}
      <Section kicker="STRATEGY" title="我的策略與執行">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="受眾與通路分析（我做）" tone="brand">
            把客群拆成備孕／懷孕／嬰兒期三階段，分析通路（綜合電商 37% 為主）、
            社群平台（FB＋IG 為主戰場）與影響者（KOL/KOC 比較），鎖定推廣切點。
          </Card>
          <Card title="網站升級 × 遊戲化（我做）" tone="cyan">
            新增討論區、評論區、專家交流站；設計<b className="text-white">點數制度</b>（註冊、互動、推薦得點，可折抵/兌換），
            用集點遊戲化把黏著度與回訪率拉起來。
          </Card>
          <Card title="軟性推廣 + 口碑行銷 5T（我做）" tone="mint">
            以金孕獎權威性包裝三階段受眾感興趣的內容，投放 FB/IG/Dcard/PTT；
            用 <b className="text-white">5T 框架</b>（Talkers/Topics/Tools/Taking Part/Tracking）＋試用品活動驅動口碑。
          </Card>
          <Card title="預期效益與成本（我做）" tone="brand">
            以 UGC 創作者 × <b className="text-white">四度分隔理論</b>推估擴散觸及、官網 26–46% 成長，
            並用<b className="text-white">單利／複利成長模型</b>與成本結構（網站/口碑/試用/專家）驗證可行性。
          </Card>
        </div>
        <p className="mt-4 text-[13px] text-mute">未來展望：將同一套「知識＋情感支持＋專業建議」平台模式，複製到東南亞母嬰市場。</p>
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
          <div className="text-lg font-bold">想聊聊產品或行銷？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            <a href={p.pdf} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">下載簡報</a>
          </div>
        </div>
      </section>
    </main>
  )
}
