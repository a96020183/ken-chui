# 徐浩華 Ken Chui — 作品集網站

產品企劃（APM）求職作品集。深色主題、中文、面向招募方。
技術：Vite + React + Tailwind CSS + React Router。

線上網址：部署於 Vercel（見下方「部署」）。

---

## 在新電腦上接手（快速開始）

需求：Node.js 18+（建議 20）、Git。

```bash
git clone https://github.com/a96020183/ken-chui.git
cd ken-chui
npm install
npm run dev      # 本機開發，預設 http://localhost:5173/
```

> Windows 若遇到 `npx.ps1 cannot be loaded ...`（PowerShell 執行原則擋住），
> 改用 `cmd /c "npm run dev"`，或先 `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`。

### 常用指令
| 指令 | 作用 |
| --- | --- |
| `npm run dev` | 本機開發伺服器（HMR 熱更新） |
| `npm run build` | 產生正式版到 `dist/` |
| `npm run preview` | 本機預覽 `dist/` 產出 |

---

## 專案結構

```
src/
  data/profile.js        ← 個人資料 + 所有作品(projects[])。改內容主要動這裡
  App.jsx                ← 路由設定
  components/            ← Nav、Footer
  pages/
    Home.jsx             ← 首頁（Hero / 能力光譜 / 作品列表 / 關於）
    CV.jsx               ← /cv 履歷頁（可列印成 PDF）
    ProjectPPA.jsx       ← AWS PressPlay AI（含內嵌可互動 Demo）
    ProjectBNP.jsx       ← 法巴 Cardif 保包巴士
    ProjectYao.jsx       ← 瑤光深鯨 無障礙（含內嵌 Figma 互動原型）
    ProjectJinYun.jsx    ← 金孕獎 行銷
    ProjectBeacon.jsx    ← ATCC BEACON 兒少心理
public/
  icon.png, cv.png       ← 頭像 / 圖片版履歷
  ppa-demo/              ← AWS 黑客松作品的靜態可互動 Demo（內嵌於作品頁）
  bnp/ yao/ jinyun/ atcc/← 各作品的截圖 + 壓縮版簡報 PDF
```

### 要改內容時
- 改文字 / 新增作品：多數只需編輯 `src/data/profile.js` 的 `projects[]`。
- 新增一個作品頁：在 `src/pages/` 複製一個 Project 頁、在 `src/App.jsx` 加路由。
- 換履歷內容：改 `src/data/profile.js`（experience / education / cvSkillGroups / certs / languages）；`/cv` 頁會自動反映。

---

## 部署（Vercel）

本專案已含 `vercel.json`（SPA rewrite，讓 `/cv`、`/projects/*` 直接開啟不會 404）。

建議用 GitHub 連動自動部署：
1. 到 https://vercel.com → 用 GitHub 登入。
2. New Project → Import 這個 repo（`a96020183/ken-chui`）。
3. Framework 會自動偵測為 **Vite**；Build = `npm run build`，Output = `dist`。
4. Project Name 設為 `ken-chui`（網址會是 `ken-chui.vercel.app`）。
5. Deploy。之後每次 `git push` 到 `main` 都會自動重新部署。

---

詳細的專案背景、定位與決策，請看 `HANDOFF.md`。
