import React from 'react'
import { Link } from 'react-router-dom'
import { projects, profile } from '../data/profile.js'

const p = projects.find((x) => x.slug === 'tapable-buildmode')

// 只放跟公開 README 同層次的畫面：講它做到什麼，不講怎麼做到
const shots = [
  { src: '/tapable/deck-problem.jpg', cap: '為什麼要做 TapAble：視障友善 ATM 花了八年仍不足全台 1/4；列印機、批價機、點餐機連這條慢車道都沒有' },
  { src: '/tapable/deck-solution.jpg', cap: '三段接力：Edge AI 看 → NFC 確認 → LLM 理解。安全判斷交給端側模型與規則引擎，不交給 LLM' },
  { src: '/tapable/phone-connected.png', cap: 'Demo · 手機端：碰到 NFC 貼紙後確認機台，進入黑屏語音模式' },
  { src: '/tapable/stage-completed.png', cap: 'Demo · 機台投影模式：流程走完，文件已印出' },
  { src: '/tapable/field-vision-warning.jpg', cap: '實地測試：鏡頭端側辨識在校園走廊即時給出方向與障礙提示（畫面已去識別）' },
]

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

export default function ProjectTapAble() {
  return (
    <main>
      {/* HERO */}
      <section className="pp-ring border-b border-line/60">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand/15 px-3 py-1 text-[13px] font-bold text-brand">{p.award}</span>
            {p.startup && <span className="rounded-full bg-mint/15 px-3 py-1 text-[13px] font-bold text-mint">🚀 創業進行中</span>}
            <span className="text-[13px] text-mute">{p.period}</span>
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">{p.title}</h1>
          <p className="mt-3 text-[15px] font-semibold text-cyan">{p.host}</p>
          <p className="mt-0.5 text-[13px] text-mute">{p.event}</p>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/85">{p.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={p.demoUrl} target="_blank" rel="noreferrer"
              className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] shadow-glow transition hover:brightness-110">▶ 開啟線上 Demo</a>
            <a href={p.video} target="_blank" rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">看 2 分鐘影片</a>
            <a href={p.repo} target="_blank" rel="noreferrer"
              className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">GitHub 原始碼（MIT）</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat big="🥈 第二名" label="160 隊 · 全場排名" />
            <Stat big="3 天" label="從題目到可玩的開源雛形" />
            <Stat big="0 改造" label="機台零硬體改動" />
            <Stat big="0 違規" label="axe · WCAG 2.1 A/AA · 18 畫面" />
          </div>
        </div>
      </section>

      {/* 我的角色 */}
      <Section kicker="MY ROLE" title="我的角色">
        <p className="mb-5 text-[15px] leading-relaxed text-white/85">
          這個題目是我在校內競賽<Link to="/projects/yaoguang-whale" className="text-brand underline underline-offset-2">瑤光深鯨</Link>原創發想的，
          黑客松是它第一次<b className="text-white">從簡報變成能跑的程式</b>。
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="我負責的部分" tone="brand">
            隊長與統籌。產品定義與操作流程設計、<b className="text-white">約 95% 的程式開發</b>（以 AI agent 協作）、
            田野驗證的方法設計、對外文件與繳交。
          </Card>
          <Card title="團隊分工" tone="cyan">
            5 人團隊 ChatKTV（北科大 × 銘傳）。一位組員負責其餘約 5% 程式、簡報製作與上台報告；
            另三位負責研究素材、影片腳本與拍攝——其中一位在賽前完成了三位視障者的訪談。
            <span className="text-mute"> 只有兩人碰 code 是刻意的流程設計：三天內整合看不懂 diff 的人的程式，期望值是負的。</span>
          </Card>
        </div>
      </Section>

      {/* 問題 */}
      <Section kicker="THE PROBLEM" title="要解決的問題：摸不到按鍵的玻璃">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          全台視障者約 5.4 萬人（重度以上約 2.25 萬）。公共服務全面觸控化之後，
          <b className="text-white">問題不是看不到一個螢幕，而是從找到、確認到操作，整條流程都可能中斷。</b>
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="找到機台難" tone="red">室內定位不穩，使用者很難快速確認哪一台設備可用、在哪個方向。</Card>
          <Card title="確認機台難" tone="brand">NFC 感應區小、貼紙位置不一，靠近之後仍需要摸索。</Card>
          <Card title="操作機台難" tone="cyan">螢幕平面化、缺乏實體回饋，操作過程容易失去自主與隱私。</Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-card p-5">
          <div className="mb-2 font-bold text-cyan">監理有效，但太慢、而且只發生在金融場域</div>
          <ul className="space-y-1.5 text-[14px] text-white/85">
            <li>• ATM 是唯一有主管機關盯著的機台。到 2025 年 8 月，視障可用 ATM <b className="text-white">7,881 台</b>，仍不足全台約 3.35 萬台的 <b className="text-white">1/4</b>——花了八年逐台派工。</li>
            <li>• 校園列印機、醫院批價機、點餐機、售票機，連這條慢車道都沒有。</li>
            <li>• 與其一台一台改造機器，我們選擇<b className="text-white">讓使用者用自己的手機接管它</b>。</li>
          </ul>
        </div>
      </Section>

      {/* 解法 */}
      <Section kicker="THE SOLUTION" title="TapAble：讓手機成為視障者的無障礙操作層">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="① Edge AI 看" tone="brand">走完最後十公尺。手機鏡頭在端側辨識機台、門、樓梯與障礙物，轉成「兩點鐘方向」這類語音提示；影像不上傳、辨識完即丟棄。</Card>
          <Card title="② NFC 確認" tone="cyan">靠近後碰一下貼紙，手機立刻知道面前是哪一台機器、有哪些選項；鏡頭關閉，切換黑屏防窺模式，語音只進使用者自己的耳機。</Card>
          <Card title="③ LLM 理解" tone="mint">「我要證明我還在念書的那張紙」——大型語言模型聽懂口語，轉成機台的結構化選項（服務：在學證明・份數：2），再由語音逐步引導完成。</Card>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card title="安全不交給 LLM" tone="brand">
            LLM 只負責「聽懂」，不負責即時安全判斷。意圖解析採雙層設計：端側規則引擎先接，LLM 超時自動退回規則；
            使用者說完後系統會<b className="text-white">複述一次、等確認</b>才執行——語音永遠不會直接觸發付款或送出。
          </Card>
          <Card title="離線也能用" tone="cyan">
            PWA 預快取端側視覺模型，除了 LLM 這一步之外全程不需網路；
            瀏覽器原生語音合成與辨識，不綁任何一家硬體或 App 商店。
          </Card>
        </div>
      </Section>

      {/* Demo */}
      <Section id="demo" kicker="LIVE DEMO" title="線上可玩的 Demo">
        <p className="mb-4 text-[15px] leading-relaxed text-white/85">
          以「校園文件列印機」為場景的完整操作動線。<span className="text-mute">內嵌版本可以直接點；語音輸入與鏡頭需要瀏覽器權限，建議在新分頁開啟、用手機體驗最完整。</span>
        </p>
        <div className="overflow-hidden rounded-2xl border border-line bg-ink2 shadow-card">
          <div className="flex items-center gap-1.5 border-b border-line/60 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F26D6D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            <span className="ml-3 text-[12px] text-mute">TapAble · 校園列印機 Demo</span>
            <a href={p.demoOpUrl} target="_blank" rel="noreferrer" className="ml-auto text-[12px] text-cyan hover:underline">在新分頁全螢幕開啟 ↗</a>
          </div>
          <iframe
            src={p.demoOpUrl}
            title="TapAble Demo"
            className="h-[720px] w-full"
            loading="lazy"
            allow="camera; microphone; autoplay"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={p.demoUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-4 py-2 text-[13px] font-semibold text-white/90 transition hover:bg-white/5">入口導覽頁（有語音介紹）</a>
          <a href={p.demoOpUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-4 py-2 text-[13px] font-semibold text-white/90 transition hover:bg-white/5">完整操作 Demo</a>
          <a href={p.demoVisionUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-4 py-2 text-[13px] font-semibold text-white/90 transition hover:bg-white/5">鏡頭導引（需相機）</a>
        </div>
      </Section>

      {/* 影片 */}
      <Section kicker="VIDEO" title="評選影片（1 分 47 秒）">
        <p className="mb-4 text-[14px] leading-relaxed text-white/70">
          在真實的校園文件列印機前、戴眼罩實測的最終產出。
        </p>
        <div className="overflow-hidden rounded-2xl border border-line bg-ink2 shadow-card">
          <iframe
            src={p.videoEmbed}
            title="TapAble 評選影片"
            className="aspect-video w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Section>

      {/* 驗證 */}
      <Section kicker="VALIDATION" title="驗證了什麼、沒驗證什麼">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="做了的驗證" tone="mint">
            <ul className="space-y-1.5">
              <li>• 真實機台（校園文件列印機）戴眼罩實測，完整跑通取件流程。</li>
              <li>• 訪談 3 位視障者驗證需求；概念滿意度 4.67 / 5（n=3，探索性質）。</li>
              <li>• 意圖解析 85 個單元測試＋80 個以上回歸案例；八句口語實測表公開在 repo。</li>
              <li>• axe-core 無障礙掃描 18 個畫面，WCAG 2.1 A/AA 違規 0 項。</li>
            </ul>
          </Card>
          <Card title="誠實揭露的限制" tone="red">
            <ul className="space-y-1.5">
              <li>• 戴眼罩的測試者是明眼人，<b className="text-white">截至提交尚無視障者實際操作過本作品</b>。</li>
              <li>• Web NFC 在 demo 中以按鈕模擬；真實機台的履約層需要銀行／機台營運方合作。</li>
              <li>• 早期原型曾給出以公分計的距離提示，因實測未完成而移除——不編造數據。</li>
            </ul>
          </Card>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-mute">
          這套「誠實揭露限制的驗證型團隊」姿態是策略不是妥協：三天做得到的是引導層，做不到的就寫清楚做不到。
        </p>
      </Section>

      {/* 商業模式 */}
      <Section kicker="BUSINESS MODEL" title="誰付費、量什麼">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="視障者永遠免費" tone="brand">
            付費的是機台擁有者——銀行、醫院、機台營運方。第一批客戶最可能是已經在花錢做語音無障礙的 ATM 業者；
            交付形式可以是銀行 App SDK，或 LINE 輕量網頁免下載。
          </Card>
          <Card title="North Star：獨立完成率" tone="cyan">
            我們要衡量的不是 AI 多準，而是<b className="text-white">人能不能在不依賴他人的情況下真正完成一件事</b>。
            這個數字同時就是企業可追蹤的普惠金融／ESG 實績。
          </Card>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-card p-5 text-[13.5px] leading-relaxed text-mute">
          「零介接」只對<b className="text-white/85">語音引導層</b>成立；真正代替使用者按下機台按鍵的<b className="text-white/85">履約層</b>需要機台端 API，這是下一階段要與合作方一起做的事。
          黑客松版本以 MIT 開源作為歷史證明；商業化開發於私有倉進行，實施細節不公開。
        </div>
      </Section>

      {/* 脈絡 */}
      <Section kicker="LINEAGE" title="同一個題目，走了一年">
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: '瑤光深鯨', s: '全國商管跨域競賽 · 🥉 第三名', d: '原創發想；簡報＋Figma 原型', to: '/projects/yaoguang-whale' },
            { t: '空間資訊版', s: '3S 創客競賽 · 🏅 入圍獎', d: '延伸到 GIS / GNSS 場域' },
            { t: 'TapAble', s: 'BUILDMODE 黑客松 · 🥈 160 隊第二', d: '第一次變成能跑的程式並開源' },
            { t: 'AI 輔助迭代', s: '台灣尤努斯創新獎 · 決賽 9/12', d: '233 組晉級決賽，創業主力版本' },
          ].map((x) => {
            const inner = (
              <>
                <div className="font-black text-white">{x.t}</div>
                <div className="mt-1 text-[12.5px] font-semibold text-cyan">{x.s}</div>
                <div className="mt-1.5 text-[12.5px] text-mute">{x.d}</div>
              </>
            )
            const base = 'rounded-2xl border border-line bg-card p-4'
            return x.to
              ? <Link key={x.t} to={x.to} className={`${base} transition hover:border-brand/50`}>{inner}</Link>
              : <div key={x.t} className={base}>{inner}</div>
          })}
        </div>
      </Section>

      {/* 畫面 */}
      <Section kicker="GALLERY" title="畫面精選">
        <div className="grid gap-5 md:grid-cols-2">
          {shots.map((s) => (
            <a key={s.src} href={s.src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-line bg-ink2">
              <img src={s.src} alt={s.cap} loading="lazy" className="w-full transition group-hover:opacity-90" />
              <div className="px-4 py-3 text-[13px] text-white/80">{s.cap}</div>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card to-ink2 p-8 text-center">
          <div className="text-lg font-bold">對無障礙、機台場域或這個題目有興趣？</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-xl bg-brand px-5 py-2.5 font-bold text-[#231600] transition hover:brightness-110">聯絡我</a>
            <a href={p.demoUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">▶ 開啟 Demo</a>
            <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2.5 font-semibold text-white/90 transition hover:bg-white/5">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  )
}
