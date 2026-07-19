import React from 'react'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'ppa-hackathon')

function Stat({ big, label }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-4 text-center">
      <div className="text-2xl font-black text-brand md:text-3xl">{big}</div>
      <div className="mt-1 text-[12px] text-mute">{label}</div>
    </div>
  )
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-5 py-10">
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

export default function ProjectPPA() {
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
            <a href={p.demoPath} target="_blank" rel="noreferrer"
              className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] shadow-glow transition hover:brightness-110">▶ 開啟互動 Demo</a>
            <a href={p.repo} target="_blank" rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">GitHub 原始碼</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat big="🥈 第二名" label="競賽成績" />
            <Stat big="1 晚" label="凌晨開工，隔日交件" />
            <Stat big="9 畫面" label="完整可互動動線" />
            <Stat big="1 人" label="獨立完成產品" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <p className="mb-5 text-[15px] leading-relaxed text-white/85">
          我是產品背景（APM）的人，這個專案正好證明了我最想展現的能力：
          <b className="text-white">既能從商業與使用者角度定義問題，也能親手把產品做出來、推上線。</b>
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我獨立完成的部分" tone="brand">
            商業洞察與痛點分析、官方資料集分析（Python）、產品策略與遊戲化機制設計、
            全部 UI/UX、前端開發（React + Vite + Tailwind）、以及 AWS 雲端部署。
          </Card>
          <Card title="團隊分工" tone="cyan">
            現場報告由組員負責（我是香港人，中文口語表達交給隊友更合適）；
            吉祥物「PiPi」由設計組員繪製。<span className="text-mute">其餘從 0 到部署由我一手包辦。</span>
          </Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-5">
          <div className="mb-1 font-bold text-mint">時間線</div>
          <p className="text-[14px] leading-relaxed text-white/85">
            題目於星期二公布，當時我人在交流團，直到星期三晚上才返家、團隊也才首次開會。
            我在<span className="text-brand font-semibold">當晚凌晨</span>才正式動工，
            並在有限的時間內，將策略、設計、前端到雲端部署逐一收斂，
            交付出一個能實際操作、也能完整展示的產品。
          </p>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          命題方 PressPlay Academy（台灣最大線上學習平台）給了一個矛盾：
          <span className="text-white font-semibold">AI 助教效果極強，卻沒人用。</span>
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="效果極強" tone="mint">用了 AI 助教的用戶：影片觀看 +700%、Session +84%、活躍天數 +52%。</Card>
          <Card title="但觸及極弱" tone="red">AI 助教滲透率僅 11.7%、DAU/MAU 從 29% 掉到 &lt;10%。</Card>
          <Card title="官方的質疑" tone="brand">「遊戲化滲透率雖高（42%），但無法確認能帶動看課。」— 這是我方案必須正面回答的。</Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-card p-5">
          <div className="mb-2 font-bold text-cyan">我實跑官方資料集挖到的「斷點鐵證」</div>
          <ul className="space-y-1.5 text-[14px] text-white/85">
            <li>• <b className="text-white">39.6%</b> 的 AI 對話「問一次就走」，平均每段僅 6.68 則訊息。</li>
            <li>• 僅 <b className="text-white">13.2%</b> 行為進入「學習中」，卻有 <b className="text-white">20.5%</b> 停在「其他」漫遊。</li>
            <li>• 課程分類細達 <b className="text-white">145 類</b>，通用推薦難命中 → 需要 AI 精準分眾。</li>
          </ul>
        </div>
      </Section>

      {/* 解法 */}
      <Section kicker="THE SOLUTION" title="我的解法：讓 AI 從被動變主動">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="① 主動進化" tone="brand">AI 不再等你問。答錯 / 看完 / 對話快冷掉時，主動生成「知識缺口雷達 + 下一步」，接住每一個會流失的斷點。</Card>
          <Card title="② 多維賦能" tone="cyan">同一份課程被 AI 轉成挑戰題、45 秒精華、電子書、Podcast、雷達診斷——覆蓋不同學習場景。</Card>
          <Card title="③ 滲透擴散" tone="mint">「45 秒軟著陸 + 遊戲化回訪」把非會員轉成會員＝擴大 AI 可觸及池，同時拉高滲透率與活躍天數。</Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-card p-5">
          <div className="mb-2 font-bold text-brand">正面回答官方質疑</div>
          <p className="text-[14px] leading-relaxed text-white/85">
            我把遊戲化「焊死」在學習行為上：知識精靈 PiPi 的經驗值<b className="text-white">只能</b>靠「看課 / 用 AI」取得；
            排行榜拆成日/週/月/總降低新人門檻；六角徽章與學習戰隊做社交喚回。
            遊戲化不再是平行娛樂，而是<b className="text-white">看課的引擎</b>——並以 A/B 實驗設計驗證因果。
          </p>
        </div>
      </Section>

      {/* Demo */}
      <Section kicker="LIVE DEMO" title="可互動 Demo">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          手機版 Web 原型，9 個畫面可點擊跑完整動線。<span className="text-mute">（比賽用的 AWS 環境已回收，此處為永久內嵌版本，可直接互動。）</span>
        </p>
        <div className="overflow-hidden rounded-2xl border border-line bg-ink2 shadow-card">
          <div className="flex items-center gap-1.5 border-b border-line/60 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F26D6D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            <span className="ml-3 text-[12px] text-mute">PressPlay AI · 互動原型</span>
            <a href={p.demoPath} target="_blank" rel="noreferrer" className="ml-auto text-[12px] text-cyan hover:underline">在新分頁全螢幕開啟 ↗</a>
          </div>
          <iframe src={p.demoPath} title="PPA Demo" className="h-[720px] w-full" loading="lazy" />
        </div>
      </Section>

      {/* 技術 */}
      <Section kicker="TECH" title="技術與成果">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="技術棧" tone="cyan">
            <div className="flex flex-wrap gap-1.5">
              {['React', 'Vite', 'Tailwind CSS', '純 SVG 雷達圖', 'AWS Amplify Hosting', 'Amazon Bedrock (架構)', 'DynamoDB (架構)', 'Python (資料分析)'].map((t) => (
                <span key={t} className="rounded-md border border-line px-2 py-0.5 text-[12px] text-white/80">{t}</span>
              ))}
            </div>
          </Card>
          <Card title="成果" tone="brand">
            獲得<b className="text-white"> 第二名</b>。在僅一個晚上的時間內，交付完整的可互動 Demo 並完成 AWS 雲端部署；
            以實際資料佐證問題，並以具體機制回應了評審對遊戲化成效的疑慮。
          </Card>
        </div>
      </Section>

      {/* 底部 CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-8 text-center">
          <div className="text-lg font-bold">想看更多，或聊聊合作？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            <a href={p.demoPath} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">▶ 開啟 Demo</a>
            <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  )
}
