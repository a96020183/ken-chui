// 個人資料與作品集內容（集中管理，之後加比賽只改這裡）

export const profile = {
  name: 'Ken Chui',
  nameZh: '徐浩華',
  title: '產品企劃（APM）· 會自己動手做的產品人',
  titleEn: 'Associate Product Manager',
  tagline: '心理學＋商管背景 × APM 實務經驗：用產品與商業視角理解問題，也能親手把想法做成能跑的產品。',
  location: '台北 · 來自香港',
  email: 'a96020183@gmail.com',
  phone: '0901-404-044',
  github: 'https://github.com/a96020183',
  cv: '/cv',
  cvImage: '/cv.png',
  photo: '/icon.png',
  languages: ['粵語（母語）', '國語（精通）', '英語（精通）'],
  certs: ['GA4 數據分析', 'Google Ads（App）', 'Google Ads（AI）', 'Google Ads（評估）'],
  // CV 頁專用的技能分組（Home 仍用 productSkills / techSkills）
  cvSkillGroups: [
    { label: '產品設計', items: ['Figma', 'PRD 撰寫', '使用者路徑分析', '競品分析'] },
    { label: '數據分析', items: ['Firebase', 'Mixpanel', 'GA4', '埋點規劃', 'SQL', 'SAP'] },
    { label: '前端開發', items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Python'] },
    { label: 'AI 與雲端', items: ['Prompt Engineering', 'LLM 產品設計（RAG / Agent）', 'AI Prototyping', 'AWS Amplify / Bedrock'] },
  ],
  intro: [
    '國立臺北科技大學經營管理系應屆畢業（2026）。商管訓練讓我習慣先從商業問題與使用者需求出發，再決定怎麼做。',
    '在 CMoney 擔任產品企劃（APM）實習——從痛點研究、埋點與數據分析、Figma 介面設計，到功能發想、實作、測試與上架送審都實際做過，是那種「什麼都碰、把產品推上線」的產品人。',
    '我的差異化：不只做規劃，也能自己寫程式把原型做出來。這讓我更快驗證想法，也更懂得和工程團隊溝通。',
  ],
  // 兩類技能：產品是本業，技術是差異化武器
  productSkills: ['產品規劃', '需求分析 / PRD', '埋點與數據分析', '使用者痛點研究', 'Figma / UI 設計', '競品分析'],
  techSkills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Python', 'Firebase', 'AWS (Amplify / Bedrock)', 'Prompt Engineering', 'LLM 應用開發'],
  experience: [
    {
      role: '產品企劃實習（APM）',
      org: 'CMoney',
      period: '2025/06 – 至今',
      points: [
        '前期參與多項股票類產品；後期加入「權證小哥」產品，協助資深 PM 進行功能規劃與落地。',
        '實際參與功能的完整流程：使用者痛點研究 → 埋點與 Firebase 數據分析 → Figma 介面設計 → 功能發想與實作 → 功能測試 → 上架送審。',
        '以 Mixpanel／Firebase 分析流失節點，協助產品下半年 YoY 由負轉正，最高單月成長 +70.7%。',
      ],
    },
    {
      role: '夜班房務部經理',
      org: '香港喜來登酒店',
      period: '香港 · 2023–2024（合約制）',
      points: [
        '負責夜間突發狀況與危機管理，跨部門協調營運資源，確保服務流程之穩定性。',
      ],
    },
    {
      role: '青少年空間共享計劃經理',
      org: '香港東華三院（社福機構）',
      period: '香港 · 2022–2023（合約制）',
      points: [
        '主導專案從 0 到 1 落地執行，對準內外部利害關係人需求，推動目標客群之社群參與。',
      ],
    },
    {
      role: '採購部文員（兼職）',
      org: 'Compass Group（英國富時 100 指數成分）',
      period: '香港 · 2019–2022',
      points: [
        '熟悉 SAP 系統，以 Excel（VBA）開發自動化數據處理工具，優化常規採購流程。',
        '將複雜採購數據轉化為視覺化報表，提升團隊決策效率。',
      ],
    },
  ],
  education: [
    {
      school: '國立臺北科技大學',
      dept: '經營管理系',
      period: '2024–2026 應屆畢業 · CGPA 3.7',
    },
    {
      school: '香港大學專業進修學院（HKU SPACE）',
      dept: '心理學副學士',
      period: 'CGPA 3.5',
    },
  ],
}

export const projects = [
  {
    slug: 'ppa-hackathon',
    featured: true,
    host: 'AWS Summit Taipei 2026',
    title: 'PressPlay AI 智慧學習生態系',
    event: '百工百業瘋 AI Hackathon · Amazon Web Services 主辦',
    award: '🥈 第二名',
    period: '2026 · 3 天黑客松',
    role: '全端 + 產品策略 + 資料分析（獨立完成）',
    summary: 'PressPlay Academy 是台灣最大的線上學習平台。這個專案重新設計它的 AI 學習助教，讓助教從被動等待提問，進化為能主動診斷、跨場景陪伴的學習夥伴。從商業洞察、資料分析、產品設計，到前端開發與雲端部署，皆由我獨立完成。',
    tags: ['React', 'Vite', 'Tailwind', 'AWS Amplify', 'Amazon Bedrock', '產品設計'],
    cover: 'gradient-a',
    hasDemo: true,
    demoPath: '/ppa-demo/index.html',
    repo: 'https://github.com/a96020183/ppa-ai-hackathon-fish',
  },
  {
    slug: 'bnp-insurhack',
    featured: true,
    host: '法國巴黎人壽 BNP Paribas Cardif',
    title: '保包巴士 · Z 世代訂閱制智慧保險',
    event: 'Cardif InsurHack 第三屆法國巴黎人壽校園黑客松商業競賽',
    award: '🥈 第二名',
    period: '2025 · 商業企劃競賽',
    role: '提案發想 · 商業模式 · 財務模型 · 技術可行性',
    summary: '針對 Z 世代「不想買、看不懂、沒感覺」的保險痛點，提出以「生活情境觸發 × 訂閱制養成 × 點數回饋」為核心的智慧保險系統，透過 LINE 生態把保險變成負擔得起的生活服務。我負責提案核心：商業模式、財務模型與技術可行性。',
    tags: ['商業模式', '財務模型', '技術可行性', '訂閱經濟', 'LINE 生態', 'Data Clean Room'],
    cover: 'gradient-b',
    hasDemo: false,
    pdf: '/bnp/baobao-bus-proposal.pdf',
  },
  {
    slug: 'yaoguang-whale',
    host: '2026 全國商管暨跨域創新實務專題競賽',
    title: '瑤光深鯨 · 零硬體改造的無障礙操作系統',
    event: '跨域專題組 · 國立臺北科技大學（指導：陳擎文教授）',
    award: '🥉 第三名',
    period: '2026 · 跨域創新競賽',
    role: '原創發想 · 系統設計 · 商業模式 · 財務規劃 · Figma 原型',
    summary: '全觸控化的公共機台（ATM、醫院批價機、自助點餐機）把視障者擋在數位服務門外，形成「數位玻璃牆」。這個由我原創發想的專題，設計出「零硬體改造」的無障礙中介層 SDK——用 NFC / BLE 加手機語音，把觸控操作轉譯成視障者熟悉的滑動流程，並以 B2B SaaS 模式讓企業低成本合規。',
    tags: ['社會創新', '無障礙 a11y', '系統設計', 'B2B SaaS', 'NFC / BLE', 'Figma'],
    cover: 'gradient-c',
    hasDemo: false,
    figma: 'https://www.figma.com/proto/UNB6G7wMXIzs8sDZh799IP/ALL?node-id=2103-4468&t=6OJriSNleSLe47ZQ-0&scaling=scale-down&content-scaling=fixed&page-id=2103%3A4467&starting-point-node-id=2103%3A4468',
    pdf: '/yao/yaoguang-whale-deck.pdf',
  },
  {
    slug: 'jinyun-branding',
    host: '2024 全球品牌策劃與設計大賽',
    title: '金孕獎 · 母嬰榮耀獎項推廣策略',
    event: '議題三：母嬰榮耀獎項推廣策略（代表企業：金孕獎）',
    award: '🥈 銀質獎',
    period: '2024 · 品牌行銷競賽',
    role: '受眾/通路/社群分析 · 網站升級與遊戲化 · 口碑行銷 5T · 成效與成本',
    summary: '為台灣母嬰產業獎項「金孕獎」設計品牌推廣策略：從 SWOT 與受眾分析出發，提出網站升級（討論區＋點數遊戲化＋專家互動）與軟性推廣＋口碑行銷 5T，並以 UGC 擴散與成長模型推估成效。受眾分析、網站遊戲化、口碑行銷、成效與成本規劃皆為我負責。',
    tags: ['品牌行銷', '受眾/通路分析', '遊戲化', '口碑行銷 5T', '成長模型', 'UGC'],
    cover: 'gradient-d',
    hasDemo: false,
    pdf: '/jinyun/jinyun-deck.pdf',
  },
  {
    slug: 'atcc-beacon',
    host: 'ATCC 全國大專院校商業個案大賽',
    title: 'BEACON · 兒少主動式心理支持系統',
    event: '議題夥伴：林堉璘宏泰教育基金會 × 張老師基金會',
    award: '全國 26 強',
    period: '2026 · 商業個案競賽',
    role: '系統機制設計 · OMO 數據漏斗（Mixpanel）· 商業模式與財務 · Roblox 場景',
    summary: '面對台灣兒少自殺通報創新高、45% 高風險個案從未接觸心理資源的困境，提出「主動發現」的心理支持系統 BEACON：把心理初篩藏進 Roblox、LINE ARG 校園怪談與實體工作坊，用 Mixpanel 數據做綠/黃/紅三級預警與轉介，讓孩子「自然被接住」而非「被輔導」。',
    tags: ['社會創新', 'Roblox', 'LINE ARG', 'OMO 數據漏斗', '兒少心理', '商業模式'],
    cover: 'gradient-e',
    hasDemo: false,
    pdf: '/atcc/beacon-deck.pdf',
  },
  // ============================================================
  // TODO（賽後補完整 case study）：解決未來問題競賽
  //   賽後要做：
  //   1) title 換成正式作品名稱
  //   2) event / award 換成正式名次（例如「🥇 冠軍 / 決賽第 N 名」）
  //   3) summary 寫完整（問題→解法→我的角色→成果）
  //   4) role 補「我負責什麼」；tags 補技能標籤
  //   5) 移除 ongoing: true（作品卡才會變成可點擊）
  //   6) 若要獨立作品頁：在 src/pages/ 新增頁面、src/App.jsx 加路由、放截圖到 public/
  //   7) 若有簡報：壓縮後放 public/<slug>/xxx-deck.pdf，並在此加 pdf 欄位
  // ============================================================
  {
    slug: 'fps-2026',
    ongoing: true,
    host: '2026 第四屆解決未來問題能力競賽',
    title: '（決賽進行中，詳情待賽後公開）',
    event: '晉級決賽',
    award: '🏆 決賽進行中',
    period: '2026 · 進行中',
    summary: '目前正在決賽階段，內容依競賽規範暫不公開，賽後補上完整 case study。',
    tags: [],
  },
  {
    slug: 'yunus-2026',
    ongoing: true,
    host: '第六屆台灣尤努斯創新獎',
    title: '（決賽進行中，詳情待賽後公開）',
    event: '233 組團隊報名 · 晉級決賽',
    award: '🏆 決賽進行中',
    period: '2026 · 進行中',
    summary: '自 233 組報名團隊中晉級決賽，內容依競賽規範暫不公開，決賽 9/12，賽後補上完整 case study。',
    tags: [],
  },
]
