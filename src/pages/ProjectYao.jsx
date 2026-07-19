import React from 'react'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'yaoguang-whale')

// 把 Figma proto 連結轉成可內嵌、可直接點擊操作的 embed 版本
const figmaEmbed = p.figma
  ? p.figma.replace('www.figma.com', 'embed.figma.com') + '&embed-host=share'
  : null

const shots = [
  { src: '/yao/cover.png', cap: '瑤光深鯨：零硬體改造之跨場域無障礙操作系統' },
  { src: '/yao/problem.png', cap: '問題：現有無障礙解法跟不上全觸控化速度' },
  { src: '/yao/concept.png', cap: '解法：不是 App，而是「無障礙操作中介層」SDK' },
  { src: '/yao/system.png', cap: '系統設計：NFC/BLE 低侵入式轉譯，零硬體改造' },
  { src: '/yao/steps.png', cap: '四步驟完成無障礙操作（定位 → 語音 → 黑屏 → 滑動）' },
  { src: '/yao/value.png', cap: '以軟體弭平實體世界的數位落差' },
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

export default function ProjectYao() {
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
              className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">下載提案簡報 PDF</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat big="🥉 第三名" label="競賽成績" />
            <Stat big="原創題目" label="不限題目・我發想" />
            <Stat big="5.4 萬" label="全台重度視障者" />
            <Stat big="零硬體" label="核心創新：軟體中介層" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我負責的部分" tone="brand">
            這場競賽<b className="text-white">不限題目，主題由我原創發想</b>。
            我負責系統設計、商業模式、財務規劃、技術可行性，以及 Figma 互動原型。
          </Card>
          <Card title="團隊分工" tone="cyan">
            2 人團隊（我與林亭汝）；組員負責簡報製作與現場報告。
            <span className="text-mute"> 從問題洞察、產品設計到商業論證的核心由我完成。</span>
          </Card>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題：數位玻璃牆">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          ATM、醫院批價機、自助點餐機全面觸控化，效率提升了，卻把<b className="text-white">全台約 5.4 萬名全盲與重度視障者</b>擋在數位服務之外。
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="介面斷層" tone="red">摸得到密碼鍵盤，卻在平滑螢幕上找不到「提款／確認」——操作流程被觸控切斷。</Card>
          <Card title="隱私被剝奪" tone="brand">被迫把金融卡交給旁人、在公開場合口述密碼或聽私密病歷，喪失資訊自主權。</Card>
          <Card title="舊解法過時" tone="cyan">耳機孔、點字鍵盤跟不上觸控化；手機早已取消 3.5mm 孔，要合規改硬體動輒上億。</Card>
        </div>
      </Section>

      {/* 解法 */}
      <Section kicker="THE SOLUTION" title="瑤光深鯨 SDK：零硬體改造的無障礙中介層">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="不換機台，讓手機成為操作入口" tone="brand">
            不動主機板、螢幕與核心設備，只加裝成本數十~數百元的 NFC 貼紙與 BLE Beacon，
            把機台操作「轉譯」成手機語音與滑動流程。
          </Card>
          <Card title="雙軌觸發，零學習成本" tone="cyan">
            NFC 貼紙（一摸即定位，沿用找耳機孔的習慣）＋ BLE Beacon（靠近自動感應）；
            直接沿用手機原生 VoiceOver / TalkBack 的滑動習慣，視障者不需學新設備。
          </Card>
          <Card title="四步驟操作" tone="mint">
            靠近定位 → 手機震動＋語音 → 黑屏防窺 → 單指滑動切換、雙擊確認。
          </Card>
          <Card title="隱私與資安" tone="brand">
            黑屏／高對比遮罩、語音只進使用者自己的藍牙耳機；沿用銀行「無卡提款」後端 +
            NFC 動態 Token 確認人就在機台前，防中間人攻擊與誤觸吐鈔。
          </Card>
        </div>
      </Section>

      {/* 互動原型 */}
      {figmaEmbed && (
        <Section kicker="LIVE PROTOTYPE" title="互動原型（可直接操作）">
          <p className="mb-4 text-[14px] leading-relaxed text-white/70">
            這是實際的 Figma 互動原型，可<b className="text-white">直接在頁面上點擊操作</b>；
            也可 <a href={p.figma} target="_blank" rel="noreferrer" className="text-brand underline underline-offset-2">在 Figma 全螢幕開啟</a>。
          </p>
          <div className="overflow-hidden rounded-2xl border border-line bg-ink2">
            <iframe
              title="瑤光深鯨 Figma 互動原型"
              src={figmaEmbed}
              className="h-[70vh] min-h-[520px] w-full"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Section>
      )}

      {/* 商業模式 */}
      <Section kicker="BUSINESS MODEL" title="商業模式：社會型企業 × B2B SaaS">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="誰付費" tone="brand">
            視障者（C 端）<b className="text-white">完全免費</b>；由銀行、醫學中心、大眾運輸（B 端）付費——
            把動輒上億的硬體改裝資本支出（CAPEX），轉成每年可控的軟體訂閱（OPEX）。
          </Card>
          <Card title="雙軌變現" tone="cyan">
            金融場域：SDK 年度授權＋合規維護費（沿用既有無卡提款 API，導入成本低）；
            醫療／零售：LINE LIFF 免下載，收系統串接費＋雲端 API 維護費。
          </Card>
        </div>
        <div className="mt-4">
          <Card title="擴張三部曲 → 香港市場" tone="mint">
            落地損益兩平 → SaaS 規模化（合規法規壓力驅動）→ 跨國。
            下一站鎖定機台密集的<b className="text-white">香港</b>，憑團隊繁中／粵語原生優勢低成本在地化。
          </Card>
        </div>
      </Section>

      {/* 社會影響 */}
      <Section kicker="IMPACT" title="社會影響力">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="對使用者" tone="brand">恢復財務、醫療與公共服務的自主權與隱私，能有尊嚴地獨立完成日常交易。</Card>
          <Card title="對企業" tone="cyan">以「真實任務完成率」等去識別化數據，產出可追蹤的 ESG／普惠金融量化實績，滿足金管會友善服務評鑑。</Card>
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
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {p.figma && <a href={p.figma} target="_blank" rel="noreferrer" className="rounded-xl bg-brand px-6 py-3 font-bold text-[#231600] transition hover:brightness-110">▶ 開啟 Figma 互動原型</a>}
          <a href={p.pdf} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5">下載提案簡報 PDF</a>
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-8 text-center">
          <div className="text-lg font-bold">想聊聊產品或合作？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            {p.figma && <a href={p.figma} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">Figma 原型</a>}
          </div>
        </div>
      </section>
    </main>
  )
}
