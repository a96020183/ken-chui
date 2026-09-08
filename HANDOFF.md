# 專案交接文件（HANDOFF）

給「換電腦後的自己」或協作的 AI 助手看的完整脈絡。讀完這份就能無縫接手。
（README.md 講「怎麼跑起來」；這份講「為什麼這樣做、內容細節、還沒做的」。）

---

## 1. 這是什麼

徐浩華 Ken Chui 的作品集網站。深色主題、繁中、面向招募方與合作方。
單頁式 React 網站（Vite + Tailwind + React Router），部署在 Vercel。

## 2. 個人定位（很重要，別跑掉）

- 定位：**產品經理 / PM（會自己動手做的產品人）**，不是「全端工程師 / RD」。
- 背景：**心理學（HKU SPACE 副學士）＋ 商管（台北科技大學經管系，2026 畢業）** 雙背景。
- 一句話：能發現真問題、能算商業帳、也能親手把產品做出來。
- 「會寫 code」定位成**差異化武器**，不是職稱；不要把他包裝成工程師。
- 現職：**CMoney 產品經理（正職）**。2025/06 以產品企劃實習（APM）加入，2026 年畢業後轉正；
  現負責 VIP 作者事業產品線（長線聚寶盆 等 App／Web）。**全站不再出現「實習」「APM」當現職。**
- 另有創業計畫 **TapAble**（無障礙機台操作層），見第 3 節與第 12 節保密規則。
- 聯絡：a96020183@gmail.com ／ 0901-404-044 ／ GitHub a96020183。

## 3. 作品清單與「我負責什麼」（分工誠實，別誇大）

資料集中在 `src/data/profile.js` 的 `projects[]`；卡片可點規則寫在該檔註解（`ongoing` / `noPage` 都不可點）。

**三個代表作（`featured: true`，橘框）：TapAble、AWS、法巴。**

1. **TapAble · BUILDMODE GEN-AI HACKATHON 2026**（🥈 第二名 · 160 隊，代表作）
   - FUTUREMODE 台灣未來祭 2026（9/4–9/6，台北）內的黑客松，SITCON 協辦；Track 05 AI for Taiwan / Social Impact。
     **賽道不是分開評，160 隊一起排名**，所以寫「第二名 · 160 隊」，不要寫成「賽道第二」。
   - 隊名 ChatKTV（T161），5 人（北科大 × 銘傳）；本人隊長＋統籌，產品定義、與一位組員負責全部程式（AI agent 協作）、田野驗證方法。其餘三位負責研究素材、簡報、QA、上台。
   - 頁面 `ProjectTapAble.jsx`：內嵌線上 Demo（iframe，`allow="camera; microphone"`）＋ YouTube 評選影片。
   - **Demo 網址一律用 `https://a96020183.github.io/tapable-demo/…`**（長期 demo 主機），不要用 `tapable_sep` 的 Pages 網址；
     GitHub 連結才指向 `tapable_sep`（黑客松歷史證明，MIT）。
   - 題目是 3 的延續（同一個 idea 的英文正式名）。
2. **AWS · PressPlay AI 智慧學習助教**（🥈 第二名，代表作）
   - 全端開發＋產品策略＋資料分析由本人獨立完成；簡報由另一位組員上台報告；吉祥物視覺請了設計組員協助。
   - 可互動 Demo 以**靜態內嵌**方式呈現（`public/ppa-demo/`），因競賽 AWS 環境賽後已回收。
3. **法巴 Cardif · 保包巴士**（🥈 第二名，代表作）
   - 提案發想、商業模式、財務模型、技術可行性＝本人；心理測驗 UI 非本人。
4. **瑤光深鯨 · 零硬體無障礙系統**（🥉 第三名）— TapAble 前身
   - **題目為本人原創發想**；系統設計、商業模式、財務、技術可行性、Figma 互動原型＝本人；組員負責 PPT 與上台。
   - 頁面內嵌**真實可點擊的 Figma 原型**（iframe）。頁尾有「這個題目後來怎麼了」導向 TapAble。
   - 2026-09-08 已依保密紀律改寫（見第 12 節）。
5. **金孕獎 · 母嬰獎項推廣**（🥈 銀質獎）
   - 受眾/通路/社群/影響者分析、網站升級與遊戲化、口碑行銷 5T、預期效益、成本估算＝本人。
6. **ATCC BEACON · 兒少主動式心理支持**（第 23 屆，全國 26 強）
   - 系統機制設計、OMO 數據漏斗（Mixpanel）、商業模式與三年財務、Roblox 場景＝本人；LINE ARG、實體工作坊非本人設計。
7. **2026 第四屆解決未來問題能力競賽**（🏅 佳作，`noPage`）— 翻譯蒟蒻・親盈翻譯機。無獨立頁。
8. **第 44 屆測量及空間資訊研討會 3S 創客競賽**（🏅 入圍獎，`noPage`）— 瑤光深鯨空間資訊版，決賽 2026/08/21 政大。無獨立頁。
9. **第六屆台灣尤努斯創新獎**（決賽進行中，`ongoing`）— 233 組晉級決賽，決賽 **2026/09/12**。賽後把結果填進 award、拿掉 ongoing。

## 4. 履歷 `/cv`

- 用程式刻的頁面（`src/pages/CV.jsx`），右上角可「列印 / 存成 PDF」（列印時自動白底黑字）。
- **比賽獎項清單寫死在 `CV.jsx` 的 `awards[]`，不是從 profile.js 讀**——加比賽兩邊都要改。
- 舊的圖片版 `public/cv.png` 已**不再連結**（內容過時）。正本以 `/cv` 為準。
- 工作經歷順序（新→舊）：CMoney → 香港喜來登酒店 → 香港東華三院 → Compass Group。

## 5. 設計決策（改動前先知道）

- 首頁能力區叫「**四種能力，一個完整的產品人**」，刻意不用「四個作品」（作品數量會變）。
- 代表作三個：TapAble、AWS、法巴（橘色外框＋「★ 代表作」）。使用者明說「這是我的頭三」。
- Hero 徽章原本是「開放全職機會」，轉正後改為「現任 CMoney 產品經理 · 歡迎交流合作」。
- Hero / 數字卡只放**真實事實**，不放推估估值。
- 跨作品「互補敘事」只放在**首頁**統一講，個別作品頁不重複。
- Demo 用靜態內嵌或連到既有主機，不另外部署。

## 6. 部署 / 帳號

- GitHub：`a96020183`，公開 repo，名稱 `ken-chui`。本機 Git Credential Manager 已有憑證，push 不用登入。
- Vercel：專案名 `ken-chui`（網址 `ken-chui.vercel.app`）。用 GitHub 連動、push `main` 自動部署。
- `vercel.json` 已設 SPA rewrite（否則 `/cv`、`/projects/*` 直接開會 404）。

## 7. 本機開發雷區（Windows）

- `npx.ps1 cannot be loaded`：PowerShell 執行原則擋住 → 用 `cmd /c "npm run build"` 或 `cmd /c "npx vite build"`。
- 長指令在內建 PowerShell 會觸發 PSReadLine 顯示崩潰 → 指令盡量短，或寫成 .bat 用 `cmd /c` 跑、輸出導到檔案再讀。
- 各種 `*.bat / *.py / *_out.txt / 原始 PDF / CV2.png` 都是做圖用的暫存檔，已在 `.gitignore` 排除。

## 8. 待辦 / 未定

- 尤努斯決賽（9/12）結果出來後：`profile.js` 的 `yunus-2026` 填 award、拿掉 `ongoing`；`CV.jsx` awards 同步。
- `public/yao/yaoguang-whale-deck.pdf`（瑤光深鯨原始競賽簡報）仍可下載，內含定價結構、無卡提款介接、香港佈局等
  已從頁面文字移除的內容。**是否下架由使用者決定**（2026-09-08 已提出，尚未定案）。
- `public/cv.png` 已無引用，可刪。

## 9. test-version 分支（無 HKU SPACE 版本）

- Branch 名稱：`test-version`（固定名稱，之後要用就說「test version」）。
- 與 main 的唯一差別：**教育經歷沒有 HKU SPACE 那條**。
- 維護方式：在 main 改完 → `git checkout test-version && git rebase main && git push --force`。
- 用完若不再需要：刪 branch 即可。

## 10. 更新紀錄

### 2026-09-08
1. 職稱全面從「產品企劃實習（APM）」改為「產品經理（PM）」：profile.js（title/tagline/intro/experience/education）、
   Home Hero 徽章、CV 抬頭、index.html SEO、README、ProjectPPA 文案。
2. 新增 **TapAble** 作品（`tapable-buildmode`）＋獨立頁 `ProjectTapAble.jsx`＋路由；設為第三個代表作、排在第一位。
   圖片在 `public/tapable/`：兩張與公開 README 同層次的投影片（問題／解法，JPG）＋公開 repo 的三張 demo 圖。**不放完整簡報 PDF、不放 roadmap 頁。**
3. 3S 創客競賽：決賽進行中 → 🏅 入圍獎（`noPage`）。
4. 解決未來問題競賽：CV 頁原本仍寫「決賽進行中」→ 改 🏅 佳作；作品卡加 `noPage`（原本會連到不存在的路由，是舊 bug）。
5. 瑤光深鯨頁：修正數字（5.4 萬是**全部等級**視障者，重度以上約 2.25 萬，原本寫成「重度視障者 5.4 萬」是錯的）；
   依保密紀律改寫「隱私與資安」「雙軌變現→依場域交付」「擴張三部曲（拿掉香港）」；新增「這個題目後來怎麼了」段導向 TapAble。
6. Home 作品卡加 `noPage` 判斷；Footer 履歷改用 `<Link>`。
7. 技能加入 Edge AI（TensorFlow.js）、Web Speech API、田野驗證與訪談。

### 2026-07-20
喜來登職稱更正、工作與學歷加年份、tagline 加心理學、技能加 AI/LLM、建立 `test-version` branch。

## 11. 想在新電腦「延續和 AI 的對話」

最可靠的接手方式＝把這份 `HANDOFF.md` 連同整個 repo clone 下來，讓新的對話讀這份文件即可掌握全部脈絡。

## 12. TapAble／瑤光深鯨 對外揭露規則（創業中，務必遵守）

來源：使用者的創業私倉 `a96020183/tapable-venture`（private）交接文件。網站是對外材料，適用同一套規則。

- **只講功能效益，不講實施細節**：可以說「碰一下 NFC 就知道是哪台機器」「語音永遠不直接觸發付款」；
  不可以寫 NFC 資料結構、API 介接方式、動態 Token 機制、與銀行後端如何對接。
- **不公開**：定價／授權費結構、財務預測、預算表、合作夥伴或試點場域名稱、通路夥伴、商標與專利進度細節、
  ISO 27001 等合規規劃、三年路線圖（含地域佈局，特別是香港）、任何 roadmap 時程。
- **可以公開**（已在 MIT 開源 README 裡）：三段接力的功能描述、7,881 台／5.4 萬人等有出處的公開數據、
  「視障者永遠免費、機台擁有者付費」原則、North Star 獨立完成率、測試與訪談規模、誠實揭露的限制、demo 與影片連結。
- **數據紀律**：不編造、不放推估值當事實；樣本 n=3 要標明探索性質；眼罩測試者是明眼人要寫清楚。
- **不要碰 GitLab**；產出一律本機或 GitHub，不發佈 claude.ai artifact。
- Demo 網址一律 `tapable-demo` 主機；`tapable_sep` 只當 GitHub 原始碼連結。
