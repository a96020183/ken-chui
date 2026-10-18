// 個人資料與作品集內容（集中管理，中英文都在這裡）
// 欄位可以是字串，或 { zh, en }，畫面用 useT() 取對應語言。
// 學歷與香港經歷不寫年份（使用者要求）。

export const profile = {
  name: 'Ken Chui',
  nameZh: '徐浩華',
  role: { zh: 'AI 產品經理', en: 'AI Product Manager' },
  headline: {
    zh: ['寫得出規格，', '也做得出產品。'],
    en: ['I write the spec.', 'Then I build it.'],
  },
  lede: {
    zh: 'CMoney 的 AI 產品經理。下班後和四位隊友做 TapAble，讓視障者用自己的手機操作公共觸控機台。',
    en: 'AI Product Manager at CMoney. Outside work I co-founded TapAble with four teammates. It lets blind people use public touchscreen kiosks from their own phones.',
  },
  location: { zh: '台北', en: 'Taipei' },
  email: 'a96020183@gmail.com',
  github: 'https://github.com/a96020183',
  linkedin: 'https://www.linkedin.com/in/kenchuihw',
  photo: '/icon.png',

  now: [
    { label: { zh: '現在', en: 'Now' }, text: { zh: 'CMoney AI 產品經理', en: 'AI Product Manager, CMoney' }, to: '/#experience' },
    { label: { zh: '在做', en: 'Building' }, text: { zh: 'TapAble 共同創辦人', en: 'Co-founder, TapAble' }, to: '/projects/tapable-buildmode' },
  ],

  about: {
    zh: [
      '我習慣先找到卡住的人，再自己把東西做出來。需求研究、埋點和數據分析、Figma 設計、寫程式做原型、測試、上架送審，這些我都做過。',
      '在 CMoney 實習時，我用 Mixpanel 和 Firebase 找出使用者流失的地方，協助產品下半年的年增率由負轉正，最高單月成長 70.7%。',
      '商管和心理學的背景，讓我看產品時同時想兩件事：這門生意算不算得過來，以及使用者心裡真正在意什麼。',
    ],
    en: [
      'I start with the person who is stuck, then build what gets them unstuck. I have done every step of that loop: user research, event tracking and analysis, Figma design, coding prototypes, testing and app store release.',
      'As an intern at CMoney, I used Mixpanel and Firebase to find where users dropped off, and helped turn the product\'s second-half year-over-year growth from negative to positive, peaking at +70.7% in one month.',
      'A business degree and a psychology background mean I look at every product two ways: does the business work, and what does the user actually care about.',
    ],
  },

  experience: [
    {
      org: 'CMoney',
      role: { zh: 'AI 產品經理', en: 'AI Product Manager' },
      period: { zh: '2026/09 – 現在', en: 'Sep 2026 – Present' },
      points: [
        { zh: '上線一款權證交易輔助工具的 Web 版，服務公司旗下的投資作者。', en: 'Launched the web version of a warrant-trading helper tool for one of CMoney\'s top investing creators.' },
        { zh: '上線公司作者組產品的 LINE Bot。', en: 'Launched a LINE bot for the company\'s creator products.' },
        { zh: '負責一位 VIP 作者的產品線，iOS、Android、PC、Web 四個平台同時推版本；從需求、埋點、介面設計、和工程協作、測試到上架送審，一路負責到底。', en: 'Own a VIP creator\'s product line on iOS, Android, PC and web, end to end: requirements, event tracking, UI design, engineering hand-off, QA and store release.' },
      ],
    },
    {
      org: 'CMoney',
      role: { zh: '助理產品經理（實習）', en: 'Associate Product Manager (Intern)' },
      period: { zh: '2025/06 – 2026/08', en: 'Jun 2025 – Aug 2026' },
      points: [
        { zh: '前期參與多個股票類產品，後期加入一條作者產品線，協助資深 PM 規劃功能。', en: 'Worked on several stock-investing apps, then joined a creator product line to help a senior PM plan and ship features.' },
        { zh: '用 Mixpanel 和 Firebase 找出使用者流失的地方，幫產品下半年年增率由負轉正，最高單月成長 70.7%。', en: 'Found drop-off points with Mixpanel and Firebase and helped turn second-half YoY growth positive, peaking at +70.7% in one month.' },
      ],
    },
    {
      org: 'TapAble',
      role: { zh: '共同創辦人、產品負責人', en: 'Co-founder & Product Lead' },
      period: { zh: '2026/04 – 現在', en: 'Apr 2026 – Present' },
      to: '/projects/tapable-buildmode',
      points: [
        { zh: '發起並帶領五人團隊，讓視障者用自己的手機操作點餐機這類觸控機台。', en: 'Started and lead a team of five building a way for blind people to use touchscreen kiosks, such as food ordering machines, from their own phones.' },
        { zh: '負責產品定義，原型程式大部分由我撰寫。', en: 'Define the product and write most of the prototype code.' },
        { zh: '做出 LINE 版的點餐流程：碰一下貼紙，語音一步一步引導；餐點好了，號碼會推播到手機。', en: 'Built the LINE version of the ordering flow: tap a sticker for step-by-step voice guidance, and get your order number on your phone when the food is ready.' },
        { zh: '訪談 3 位視障者，並請 2 位視障按摩師實際試用點餐流程。', en: 'Interviewed three blind users and had two visually impaired massage therapists try the ordering flow.' },
      ],
    },
  ],

  // 香港經歷：不寫年份
  earlier: {
    label: { zh: '來台灣之前，在香港', en: 'Before Taiwan, in Hong Kong' },
    items: [
      { org: { zh: '香港喜來登酒店', en: 'Sheraton Hong Kong Hotel & Towers' }, role: { zh: '夜班房務部經理', en: 'Night Duty Manager, Housekeeping' }, text: { zh: '處理夜間突發狀況，協調各部門讓服務不中斷。', en: 'Handled overnight incidents and coordinated departments to keep service running.' } },
      { org: { zh: '東華三院', en: 'Tung Wah Group of Hospitals' }, role: { zh: '青少年空間共享計劃經理', en: 'Youth Space Programme Manager' }, text: { zh: '從零推動計劃落地，帶動青少年參與社區。', en: 'Launched a youth programme from scratch and grew participation.' } },
      { org: 'Compass Group', role: { zh: '採購部文員（兼職）', en: 'Purchasing Clerk (part-time)' }, text: { zh: '使用 SAP 處理採購，並用 Excel VBA 寫自動化工具，縮短例行作業。', en: 'Used SAP for purchasing and built Excel VBA tools that automated routine work.' } },
    ],
  },

  education: [
    { school: { zh: '國立臺北科技大學', en: 'National Taipei University of Technology' }, dept: { zh: '經營管理系 學士', en: 'BBA, Business Management' }, note: { zh: 'CGPA 3.7', en: 'CGPA 3.7' } },
    { school: 'HKU SPACE', dept: 'Associate of Arts in Psychology', note: { zh: 'CGPA 3.7', en: 'CGPA 3.7' } },
  ],

  skills: [
    { label: { zh: '產品', en: 'Product' }, items: [{ zh: 'PRD 撰寫', en: 'PRDs' }, { zh: '使用者研究與訪談', en: 'User research & interviews' }, { zh: '埋點規劃', en: 'Event tracking' }, { zh: '競品分析', en: 'Competitive analysis' }, 'Figma'] },
    { label: { zh: '數據', en: 'Data' }, items: ['Mixpanel', 'Firebase', 'GA4', 'SQL', 'Excel (VBA)'] },
    { label: 'AI', items: [{ zh: 'LLM 產品設計（RAG／Agent）', en: 'LLM product design (RAG, agents)' }, 'Prompt engineering', 'Edge AI (TensorFlow.js)'] },
    { label: { zh: 'AI 開發', en: 'AI coding' }, items: [{ zh: '用 Claude Code、Codex、Kiro、Antigravity 寫程式，並用單元測試和回歸案例把關品質', en: 'Build with Claude Code, Codex, Kiro and Antigravity, and check quality with unit and regression tests' }] },
    { label: { zh: '開發', en: 'Build' }, items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Python'] },
    { label: { zh: '平台', en: 'Platforms' }, items: [{ zh: 'AWS（Amplify、Bedrock）', en: 'AWS (Amplify, Bedrock)' }, 'Firebase', { zh: 'LINE 平台：官方帳號聊天機器人與推播（Messaging API）、圖文選單、LINE Login、LIFF 網頁', en: 'LINE platform: Official Account bots and push (Messaging API), rich menus, LINE Login, LIFF web apps' }] },
  ],
  certs: ['Google Analytics 4', 'Google Ads (Apps, AI, Measurement)'],
  languages: [
    { zh: '粵語（母語）', en: 'Cantonese (native)' },
    { zh: '國語（精通）', en: 'Mandarin (full professional)' },
    { zh: '英語（精通）', en: 'English (full professional)' },
  ],
}

// 15 項獲獎，日期照獎狀（C:\2026\m\獎）。to＝站內作品頁；href＝外部連結。
export const awards = [
  { tapable: true, date: '2026/11', comp: { zh: '2026 AI 創意設計大賽 AIDA（台灣人工智慧協會）', en: 'AIDA 2026 AI Creative Design Award (Taiwan AI Association)' }, result: { zh: '決賽中', en: 'In the finals' }, work: 'TapAble', to: '/projects/tapable-buildmode' },
  { date: '2026/11', comp: { zh: '第 11 屆 Design For Taiwan 社會創新挑戰賽', en: '11th Design For Taiwan Social Innovation Challenge' }, result: { zh: '複賽中', en: 'In the semifinals' }, work: { zh: '慢一拍：班群風暴（後真相時代的應對桌遊）', en: 'One Beat Late: a board game on handling post-truth class chats' }, href: 'https://a96020183.github.io/manyipai-demo/' },
  { date: '2026/10', comp: { zh: 'AI 座艙感知與視覺化 Hackathon（資策會 × 友達）', en: 'AI Cockpit Hackathon (III × AUO)' }, result: { zh: '實作組決賽中', en: 'In the finals, build track' }, work: { zh: '警示找眼睛', en: 'Eyes-first exit alert' } },
  { date: '2026/10', comp: { zh: 'AI 座艙感知與視覺化 Hackathon（資策會 × 友達）', en: 'AI Cockpit Hackathon (III × AUO)' }, result: { zh: '創意組決賽中', en: 'In the finals, creative track' }, work: { zh: '共創世界窗', en: 'Shared World Window' } },
  { tapable: true, date: '2026/10', major: true, headline: { zh: 'LINE AI 創新創業競賽第三名', en: '3rd place, LINE AI competition' }, comp: { zh: 'LINE AI 創新創業競賽', en: 'LINE AI Innovation & Entrepreneurship Competition' }, result: { zh: '第三名', en: '3rd place' }, work: 'TapAble', to: '/projects/tapable-buildmode' },
  { tapable: true, date: '2026/09', comp: { zh: '第六屆台灣尤努斯創新獎', en: '6th Taiwan Yunus Innovation Award' }, result: { zh: '入圍決賽（233 組參賽）', en: 'Finalist (233 entries)' }, work: 'TapAble', to: '/projects/tapable-buildmode' },
  { tapable: true, date: '2026/09', major: true, headline: { zh: 'BUILDMODE 黑客松第二名', en: '2nd place, BUILDMODE GEN‑AI hackathon' }, note: { zh: '160 隊', en: '160 teams' }, comp: { zh: 'BUILDMODE 2026 GEN-AI 黑客松（FUTUREMODE 台灣未來祭）', en: 'BUILDMODE 2026 GEN-AI Hackathon (FUTUREMODE)' }, result: { zh: '第二名（160 隊）', en: '2nd of 160 teams' }, work: 'TapAble', to: '/projects/tapable-buildmode' },
  { date: '2026/08', comp: { zh: 'AI Monster 未來生存挑戰賽（大專組）', en: 'AI Monster: Future Survival Challenge' }, result: { zh: '第四名', en: '4th place' }, work: { zh: '收藏從未停止，行動從未開始', en: 'Always saving, never doing' } },
  { tapable: true, date: '2026/08', comp: { zh: '第十屆 3S 創客競賽', en: '10th 3S Maker Competition' }, result: { zh: '入圍獎', en: 'Finalist award' }, work: { zh: 'TapAble 導航版', en: 'TapAble, navigation version' }, href: '/yao-3s-demo/index.html' },
  { date: '2026/07', major: true, headline: { zh: 'AWS 黑客松第二名', en: '2nd place, AWS hackathon' }, note: { zh: '數位學習組', en: 'EdTech track' }, comp: { zh: 'AWS Summit Taipei 百工百業瘋 AI 黑客松', en: 'AWS Summit Taipei 2026 AI Hackathon (AI Everywhere)' }, result: { zh: '數位學習組第二名', en: '2nd place, EdTech track' }, work: { zh: 'PressPlay AI 學習助教', en: 'PressPlay AI tutor' }, to: '/projects/ppa-hackathon' },
  { date: '2026/07', comp: { zh: '中原大學 第四屆解決未來問題能力競賽', en: '4th Future Problem Solving Competition (CYCU)' }, result: { zh: '佳作', en: 'Honorable mention' }, work: { zh: '親盈翻譯機', en: 'Photo postcards for elders on LINE' } },
  { tapable: true, date: '2026/06', comp: { zh: '全國商管暨跨域創新實務專題競賽', en: 'National Business & Cross-disciplinary Project Competition' }, result: { zh: '跨域組第三名', en: '3rd place, cross-disciplinary' }, work: { zh: 'TapAble 第一版', en: 'TapAble, first version' }, to: '/projects/yaoguang-whale' },
  { date: '2026/05', comp: { zh: '第 23 屆 ATCC 全國大專院校商業個案大賽', en: '23rd ATCC Case Competition' }, result: { zh: '初賽決選（全國 38 強）', en: 'Quarter-final, top 38 nationwide' }, work: { zh: 'BEACON（藏在 Roblox 裡的兒少心理支持）', en: 'BEACON: youth mental-health support inside Roblox' }, to: '/projects/atcc-beacon' },
  { date: '2026/01', major: true, headline: { zh: '法國巴黎人壽黑客松第二名', en: '2nd place, BNP Paribas Cardif hackathon' }, note: { zh: '銀獎・全台 50 校、450 多位學生參賽', en: 'Silver award · 450+ students from 50 schools' }, comp: { zh: '第三屆法國巴黎人壽 Cardif InsurHack', en: '3rd Cardif InsurHack, BNP Paribas Cardif' }, result: { zh: '第二名（銀獎）', en: '2nd place (Silver)' }, work: { zh: '保包巴士', en: 'Baobao Bus' }, to: '/projects/bnp-insurhack' },
  { date: '2024/12', comp: { zh: '2024 全球品牌策劃與設計大賽 台灣總決賽', en: '2024 Global Brand Planning & Design Competition, Taiwan final' }, result: { zh: '銀質獎（196 隊）', en: 'Silver award (196 teams)' }, work: { zh: '金孕獎推廣策略', en: 'Golden Pregnancy Award strategy' }, to: '/projects/jinyun-branding' },
]

// 作品頁資料（首頁精選、作品頁標題共用）
export const projects = [
  {
    slug: 'tapable-buildmode',
    featured: true,
    cover: '/tapable/stage-completed.png',
    title: { zh: 'TapAble：讓視障者用自己的手機操作觸控機台', en: 'TapAble: blind users run touchscreen kiosks from their own phones' },
    org: { zh: '創業中', en: 'Early-stage startup' },
    result: { zh: 'BUILDMODE 黑客松第二名（160 隊）、LINE AI 競賽第三名', en: '2nd of 160 at BUILDMODE Hackathon, 3rd at LINE AI Competition' },
    period: { zh: '2026/04 – 現在', en: 'Apr 2026 – Present' },
    hook: {
      zh: '觸控螢幕沒有按鍵可以摸，視障者很難自己用點餐機、醫院批價機或列印機。TapAble 讓他們碰一下貼紙，就能用自己的手機和 LINE 一步一步完成操作，機台不用換硬體。',
      en: 'A touchscreen has no buttons to feel, so blind people struggle to use food kiosks, hospital payment machines or printers on their own. With TapAble they tap a sticker and finish the task step by step on their own phone through LINE, with no hardware change to the kiosk.',
    },
    mine: { zh: '發起專案、定義產品、寫大部分程式、田野驗證', en: 'Started the project; product definition, most of the code, field testing' },
    demoUrl: 'https://a96020183.github.io/tapable-demo/start/',
    demoOpUrl: 'https://a96020183.github.io/tapable-demo/?machine=campus-document-kiosk&demo=1',
    demoVisionUrl: 'https://a96020183.github.io/tapable-demo/vision/',
    video: 'https://youtu.be/AtMjXhrwr38',
    videoEmbed: 'https://www.youtube.com/embed/AtMjXhrwr38',
  },
  {
    slug: 'ppa-hackathon',
    featured: true,
    cover: '/ppa/cover-ui.jpg',
    title: { zh: 'PressPlay AI 學習助教', en: 'PressPlay AI tutor' },
    org: { zh: 'AWS Summit Taipei 2026 · 百工百業瘋 AI 黑客松', en: 'AWS Summit Taipei 2026 · AI Everywhere Hackathon' },
    result: { zh: '數位學習組第二名', en: '2nd place, EdTech track' },
    period: { zh: '2026/07', en: 'Jul 2026' },
    hook: {
      zh: '一個人、一個晚上：從官方資料找出學員卡關的地方，重新設計 AI 助教，做出 9 個畫面的原型並部署到 AWS。',
      en: 'Solo and overnight: found where learners stall in the official data, redesigned the AI tutor, and shipped a 9-screen prototype on AWS.',
    },
    mine: { zh: '策略、資料分析、設計、前端開發、部署', en: 'Strategy, data analysis, design, front-end, deployment' },
    demoPath: '/ppa-demo/index.html',
    repo: 'https://github.com/a96020183/ppa-ai-hackathon-fish',
  },
  {
    slug: 'bnp-insurhack',
    featured: true,
    cover: '/bnp/funnel.png',
    title: { zh: '保包巴士：給 Z 世代的訂閱制保險', en: 'Baobao Bus: subscription insurance for Gen Z' },
    org: { zh: '法國巴黎人壽 · 第三屆 Cardif InsurHack', en: 'BNP Paribas Cardif · 3rd Cardif InsurHack' },
    result: { zh: '第二名（銀獎）', en: '2nd place (Silver)' },
    period: { zh: '2026/01', en: 'Jan 2026' },
    hook: {
      zh: '把一年繳一次的保險，改成每月 99 元起的生活訂閱。42 頁企劃裡，商業模式、財務模型和技術可行性由我負責。',
      en: 'Turned a once-a-year insurance purchase into a monthly subscription from NT$99. In a 42-page plan, I owned the business model, financial model and technical feasibility.',
    },
    mine: { zh: '商業模式、財務模型、技術可行性', en: 'Business model, financial model, technical feasibility' },
    pdf: '/bnp/baobao-bus-proposal.pdf',
  },
  {
    slug: 'yaoguang-whale',
    cover: '/yao/cover.png',
    title: { zh: '瑤光深鯨：TapAble 的第一版', en: 'Yaoguang: the first version of TapAble' },
    org: { zh: '全國商管暨跨域創新實務專題競賽 · 跨域專題組', en: 'National Business & Cross-disciplinary Project Competition' },
    result: { zh: '跨域組第三名', en: '3rd place, cross-disciplinary track' },
    period: { zh: '2026/06', en: 'Jun 2026' },
    hook: {
      zh: '不換機台硬體，讓視障者用自己的手機操作公共觸控機台。題目由我原創，有可以點的 Figma 原型。',
      en: 'Let blind people operate public touchscreen kiosks from their own phones, without replacing the hardware. My original idea, with a clickable Figma prototype.',
    },
    figma: 'https://www.figma.com/proto/UNB6G7wMXIzs8sDZh799IP/ALL?node-id=2103-4468&t=6OJriSNleSLe47ZQ-0&scaling=scale-down&content-scaling=fixed&page-id=2103%3A4467&starting-point-node-id=2103%3A4468',
  },
  {
    slug: 'atcc-beacon',
    cover: '/atcc/cover.png',
    title: { zh: 'BEACON：藏在 Roblox 裡的兒少心理支持', en: 'BEACON: youth mental-health support inside Roblox' },
    org: { zh: '第 23 屆 ATCC 全國大專院校商業個案大賽', en: '23rd ATCC Case Competition' },
    result: { zh: '全國 38 強', en: 'Top 38 nationwide' },
    period: { zh: '2026/05', en: 'May 2026' },
    hook: {
      zh: '把心理初篩藏進孩子本來就在玩的 Roblox，用數據分出綠、黃、紅三級，讓需要幫忙的孩子被主動發現。',
      en: 'Hide mental-health screening inside Roblox, where kids already play, and use data to flag green, amber and red so children who need help are found early.',
    },
    pdf: '/atcc/beacon-deck.pdf',
  },
  {
    slug: 'jinyun-branding',
    cover: '/jinyun/cover.png',
    title: { zh: '金孕獎推廣策略', en: 'Brand strategy for the Golden Pregnancy Award' },
    org: { zh: '2024 全球品牌策劃與設計大賽 台灣總決賽', en: '2024 Global Brand Planning & Design Competition, Taiwan final' },
    result: { zh: '銀質獎（196 隊）', en: 'Silver award (196 teams)' },
    period: { zh: '2024/12', en: 'Dec 2024' },
    hook: {
      zh: '幫台灣母嬰產業獎項「金孕獎」設計推廣策略：網站加上討論區和點數，再用口碑擴散。',
      en: 'A promotion plan for Taiwan\'s maternal and baby industry award: a community and points system on the website, then word of mouth.',
    },
    pdf: '/jinyun/jinyun-deck.pdf',
  },
]

// 沒有獨立頁、但有東西可以看的作品
export const moreWork = [
  {
    title: { zh: '知更守護 RobinSave：詐騙電話模擬器', en: 'RobinSave: a scam-call simulator' },
    text: { zh: '讓長輩在社區活動先接一通假的詐騙電話，練習怎麼拒絕。AI 在本機判斷對話意圖。ASUS UGen AI League 參賽中。', en: 'Older adults take a fake scam call at a community event and practise saying no. AI reads the caller\'s intent on-device. Entered in the ASUS UGen AI League.' },
    period: { zh: '2026/10', en: 'Oct 2026' },
    href: 'https://github.com/a96020183/RobinSave',
    linkLabel: 'GitHub',
  },
  {
    title: { zh: '警示找眼睛：AI 座艙下車警示', en: 'Eyes-first exit alert for car cabins' },
    text: { zh: '乘客下車時眼睛多半在看手機或付款螢幕。系統把開門警示送到他正在看的那塊螢幕，窗框燈條同時提醒車外騎士。AI 座艙 Hackathon 實作組決賽中。', en: 'Passengers getting out usually look at a phone or the payment screen. The system sends the door warning to whichever screen they are looking at, while a window light strip warns cyclists outside. In the finals of the AI Cockpit Hackathon build track.' },
    period: { zh: '2026/10', en: 'Oct 2026' },
  },
  {
    title: { zh: '共創世界窗：同一段路，一起創作', en: 'Shared World Window: one road, a story made together' },
    text: { zh: '乘客輪流在車窗上造物、設定世界規則，再由另一位接力，把沿途風景變成同車一起創作的故事。AI 座艙 Hackathon 創意組決賽中。', en: 'Passengers take turns creating things on the car window and setting the world\'s rules, then someone else picks up from there, turning the road outside into a story the whole car makes together. In the finals of the AI Cockpit Hackathon creative track.' },
    period: { zh: '2026/10', en: 'Oct 2026' },
  },
]
