import React from 'react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../data/profile.js'

// 單頁列印用作品集：CV 精華 + 全部作品，白底黑字，A4 友善
export default function PrintSheet() {
  return (
    <div className="ps-wrap">
      <style>{`
        .ps-wrap { background:#525659; min-height:100vh; padding:24px 12px; }
        .ps-bar { max-width:794px; margin:0 auto 14px; display:flex; justify-content:space-between; align-items:center; }
        .ps-bar a, .ps-bar button { font-size:13px; }
        .ps-btn { background:#F7A81B; color:#231600; font-weight:700; border:0; border-radius:8px; padding:8px 16px; cursor:pointer; }
        .ps-back { color:#e5e7eb; text-decoration:none; }

        /* A4 紙張 */
        .sheet {
          width:794px; max-width:100%; margin:0 auto; background:#fff; color:#111;
          padding:24px 34px; box-shadow:0 6px 24px rgba(0,0,0,.4);
          font-family:"Microsoft JhengHei","PingFang TC",system-ui,sans-serif;
          font-size:10.5px; line-height:1.4;
        }
        .sheet h1 { font-size:23px; font-weight:900; margin:0; letter-spacing:.5px; }
        .sheet .role { font-size:12px; font-weight:700; color:#B45309; margin-top:2px; }
        .sheet .tagline { font-size:10px; color:#444; margin-top:4px; max-width:56ch; }
        .head { display:flex; justify-content:space-between; align-items:flex-start; gap:18px;
          border-bottom:2px solid #111; padding-bottom:10px; }
        .contact { font-size:10px; color:#333; margin-top:6px; line-height:1.6; }
        .contact b { color:#111; }
        .qr { flex:none; text-align:center; }
        .qr img { width:82px; height:82px; }
        .qr div { font-size:8.5px; color:#555; margin-top:2px; }

        .kicker { font-size:10.5px; font-weight:900; letter-spacing:2px; color:#B45309;
          text-transform:uppercase; margin:11px 0 5px; }
        .row2 { display:grid; grid-template-columns:1fr 1fr; gap:4px 22px; }
        .meta { font-size:10px; }
        .meta .k { font-weight:700; color:#111; }
        .skills { display:flex; flex-wrap:wrap; gap:4px; }
        .chip { border:1px solid #cbd5e1; border-radius:999px; padding:1px 8px; font-size:9.5px; color:#334155; }
        .chip.t { border-color:#7dd3fc; color:#0369a1; }

        .exp { margin-bottom:4px; }
        .exp .top { font-weight:700; font-size:10.5px; }
        .exp .org { color:#555; font-weight:400; }
        .exp li { font-size:9.5px; color:#333; margin-left:15px; line-height:1.4; }

        .grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:3px; }
        .proj { border:1px solid #d4d4d8; border-radius:7px; padding:7px 9px; break-inside:avoid; }
        .proj.feat { border:1.5px solid #F7A81B; background:#fffdf6; }
        .proj .pa { font-weight:800; font-size:10px; color:#B45309; }
        .proj .pt { font-weight:800; font-size:11.5px; margin:1px 0; }
        .proj .ph { font-size:9px; color:#666; }
        .proj .psum { font-size:9.5px; color:#333; margin-top:3px; line-height:1.4; }
        .proj .prole { font-size:9px; color:#0369a1; margin-top:3px; font-weight:600; }
        .proj.ong { border-style:dashed; }
        .proj.ong .pa { color:#047857; }

        .foot { border-top:1px solid #d4d4d8; margin-top:11px; padding-top:6px;
          font-size:9.5px; color:#555; display:flex; justify-content:space-between; }

        @media print {
          .ps-wrap { background:#fff; padding:0; }
          .ps-bar { display:none; }
          .sheet { box-shadow:none; width:auto; padding:0; }
          @page { margin:12mm; }
        }
      `}</style>

      <div className="ps-bar">
        <Link to="/" className="ps-back">← 回網站</Link>
        <button className="ps-btn" onClick={() => window.print()}>🖨 列印 / 存成 PDF</button>
      </div>

      <div className="sheet">
        {/* 抬頭 */}
        <div className="head">
          <div>
            <h1>{profile.name}　徐浩華</h1>
            <div className="role">{profile.title}</div>
            <div className="tagline">{profile.tagline}</div>
            <div className="contact">
              <b>Email</b> {profile.email}　·　<b>電話</b> {profile.phone}<br />
              <b>GitHub</b> github.com/a96020183　·　<b>作品集</b> ken-chui.vercel.app
            </div>
          </div>
          <div className="qr">
            <img src="/print-qr.png" alt="作品集網站 QR" />
            <div>掃描看完整<br />互動作品集</div>
          </div>
        </div>

        {/* 學歷 / 技能 */}
        <div className="row2" style={{ marginTop: '12px' }}>
          <div>
            <div className="kicker" style={{ margin: '0 0 6px' }}>學歷</div>
            {profile.education.map((e) => (
              <div className="meta" key={e.school}>
                <span className="k">{e.school}</span>　{e.dept}<br />
                <span style={{ color: '#666', fontSize: '10px' }}>{e.period}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="kicker" style={{ margin: '0 0 6px' }}>核心技能</div>
            <div className="skills">
              {profile.productSkills.slice(0, 6).map((s) => <span className="chip" key={s}>{s}</span>)}
              {profile.techSkills.slice(0, 6).map((s) => <span className="chip t" key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        {/* 經歷（全部 4 份；CMoney 展開重點，其餘一行帶過）*/}
        <div className="kicker">工作經歷</div>
        {profile.experience.map((x, idx) => (
          <div className="exp" key={x.org}>
            <div className="top">{x.role}　<span className="org">— {x.org}・{x.period}</span></div>
            {idx === 0 && (
              <ul style={{ margin: '2px 0' }}>
                {x.points.slice(0, 2).map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}
            {idx !== 0 && <ul style={{ margin: '1px 0' }}><li>{x.points[0]}</li></ul>}
          </div>
        ))}

        {/* 作品集 */}
        <div className="kicker">競賽作品集</div>
        <div className="grid">
          {projects.map((p) => (
            <div className={`proj ${p.featured ? 'feat' : ''} ${p.ongoing ? 'ong' : ''}`} key={p.slug}>
              <div className="pa">{p.award}{p.featured ? '　★ 代表作' : ''}</div>
              <div className="pt">{p.title.startsWith('（') ? p.host : p.title}</div>
              <div className="ph">{p.ongoing ? `${p.host}・${p.event}` : `${p.host}`}</div>
              <div className="psum">{p.summary}</div>
              {p.role && <div className="prole">我的角色：{p.role}</div>}
            </div>
          ))}
        </div>

        <div className="foot">
          <span>語言：粵語（母語）· 國語 · 英語　｜　證照：GA4 · Google Ads ×3</span>
          <span>ken-chui.vercel.app</span>
        </div>
      </div>
    </div>
  )
}
