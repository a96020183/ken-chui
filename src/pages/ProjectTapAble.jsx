import React from 'react'
import { LLink, useT, useTitle } from '../i18n.jsx'
import { projects } from '../data/profile.js'
import { Button, CaseHeader, Section, Prose, Roles, Items, List, Note, Frame, Gallery, CaseFooter } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'tapable-buildmode')

// 揭露原則：只講它做到什麼，不講怎麼做到；不寫定價、合作方、專利、路線圖、香港。

// 同一個題目的歷程：日期在左，競賽與版本在右
function Timeline({ rows }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {rows.map((r, i) => (
        <li key={i} className="grid gap-1 py-4 sm:grid-cols-[88px_1fr] sm:gap-6">
          <span className="tnum text-[14px] text-mute">{r.date}</span>
          <div className="min-w-0">
            <div className="text-[15px] font-semibold text-ink">
              {r.comp}
              <span className="font-normal text-ink2"> · {r.result}</span>
            </div>
            {r.what && <div className="mt-1 text-[14.5px] leading-[1.7] text-ink2">{r.what}</div>}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function ProjectTapAble() {
  const t = useT()
  useTitle('TapAble · 徐浩華', 'TapAble · Ken Chui')

  const shots = [
    {
      src: '/tapable/deck-problem.jpg',
      caption: t(
        '為什麼要做：視障友善 ATM 花了八年，仍不到全台的 1/4。列印機、批價機、點餐機連這條路都沒有。',
        'Why it matters: accessible ATMs took eight years and still cover less than a quarter of Taiwan\'s machines. Printers, hospital payment kiosks and food kiosks have no such path at all.'
      ),
    },
    {
      src: '/tapable/deck-solution.jpg',
      caption: t(
        '三步接力：鏡頭看、NFC 確認、語言模型聽懂。安全判斷不交給語言模型。',
        'Three steps in relay: the camera sees, NFC confirms, a language model understands. Safety calls never go to the language model.'
      ),
    },
    {
      src: '/tapable/phone-connected.png',
      caption: t(
        'Demo 手機畫面：碰到 NFC 貼紙、確認機台後，螢幕變黑，改用語音操作。',
        'Demo, phone: after the NFC tap confirms the kiosk, the screen goes dark and voice takes over.'
      ),
    },
    {
      src: '/tapable/stage-completed.png',
      caption: t('Demo 機台畫面：流程走完，文件已印出。', 'Demo, kiosk view: the flow is done and the document has printed.'),
    },
    {
      src: '/tapable/field-vision-warning.jpg',
      caption: t(
        '實地測試：鏡頭在校園走廊即時提示方向和障礙物。畫面已去識別。',
        'Field test: the camera gives live direction and obstacle cues in a campus corridor. Image de-identified.'
      ),
    },
  ]

  const lineage = [
    {
      date: '2026/06',
      comp: t('全國商管暨跨域創新實務專題競賽', 'National Business & Cross-disciplinary Project Competition'),
      result: t('跨域組第三名', '3rd place, cross-disciplinary'),
      what: (
        <>
          <LLink to="/projects/yaoguang-whale" className="link">{t('瑤光深鯨', 'Yaoguang')}</LLink>
          {t('，第一版。只有簡報和可以點的 Figma 原型。', ', the first version. Slides and a clickable Figma prototype.')}
        </>
      ),
    },
    {
      date: '2026/08',
      comp: t('第十屆 3S 創客競賽', '10th 3S Maker Competition'),
      result: t('入圍獎', 'Finalist award'),
      what: (
        <>
          {t('導航版。用 GIS 找出最缺無障礙服務的地方，再把人帶到可用的機台前。', 'Navigation version. Uses GIS to find where accessible service is most lacking, then guides people to a kiosk they can use. ')}
          <a href="/yao-3s-demo/index.html" target="_blank" rel="noreferrer" className="link">{t('互動地圖', 'Map demo')}</a>
        </>
      ),
    },
    {
      date: '2026/09',
      comp: t('BUILDMODE 2026 GEN-AI 黑客松', 'BUILDMODE 2026 GEN-AI Hackathon'),
      result: t('160 隊第二名', '2nd of 160 teams'),
      what: t('第一次寫成能跑的程式，也就是這一頁的版本。', 'The first working code. This is the version on this page.'),
    },
    {
      date: '2026/09',
      comp: t('第六屆台灣尤努斯創新獎', '6th Taiwan Yunus Innovation Award'),
      result: t('入圍決賽（233 組取 10）', 'Finalist, top 10 of 233'),
    },
    {
      date: '2026/10',
      comp: t('LINE AI 創新創業競賽', 'LINE AI Innovation & Entrepreneurship Competition'),
      result: t('第三名', '3rd place'),
      what: t(
        'LINE 官方帳號版。碰一下 NFC 貼紙就有語音引導，餐點好了，號碼直接推到手機。',
        'LINE Official Account version. Tap an NFC sticker for voice guidance, and the order number is pushed to your phone when the food is ready.'
      ),
    },
    {
      date: '2026/10',
      comp: t('2026 AI 創意設計大賽 AIDA', 'AIDA 2026 AI Creative Design Award'),
      result: t('決賽中', 'In the finals'),
    },
  ]

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t(p.period)}
        title={t(p.title)}
        org={t(p.org)}
        summary={t(
          '觸控螢幕沒有按鍵可以摸，視障者很難自己用點餐機、醫院批價機或列印機。TapAble 讓他們碰一下貼紙，就能用自己的手機一步一步完成操作，機台不用換硬體。這個專案由我發起，在 BUILDMODE 黑客松第一次做成能跑的程式。',
          'A touchscreen has no buttons to feel, so blind people struggle to use food kiosks, hospital payment machines or printers on their own. With TapAble they tap a sticker and finish the task step by step on their own phone, with no hardware change to the kiosk. I started the project, and at the BUILDMODE hackathon it became working software for the first time.'
        )}
        actions={
          <>
            <Button primary href={p.demoUrl}>{t('開啟 Demo', 'Open demo')}</Button>
            <Button href={p.video}>{t('看影片（1 分 47 秒）', 'Watch video (1:47)')}</Button>
          </>
        }
        facts={[
          { label: t('團隊', 'Team'), value: t('5 人', '5 people') },
          { label: t('黑客松開發', 'Hackathon build'), value: t('3 天', '3 days') },
          { label: t('機台硬體改動', 'Kiosk hardware changes'), value: t('零', 'None') },
          { label: t('無障礙掃描（18 個畫面）', 'Accessibility scan (18 screens)'), value: t('0 項違規', '0 violations') },
        ]}
      />

      <Section title={t('我的角色', 'My role')}>
        <Prose className="mb-10">
          <p>
            {t('這個題目我最早做成', 'The idea started as ')}
            <LLink to="/projects/yaoguang-whale" className="link">{t('瑤光深鯨', 'Yaoguang')}</LLink>
            {t(
              '，參加全國商管跨域競賽。黑客松是它第一次從簡報變成能跑的程式。',
              ', my entry to a national business competition. The hackathon was the first time it went from slides to working code.'
            )}
          </p>
        </Prose>
        <Roles
          mine={t(
            <>我是隊長。題目由我原創，我定義產品和操作流程，並和 AI agent 協作寫了<b>約 95% 的程式</b>。田野驗證的方法也由我設計，對外文件和繳交由我負責。</>,
            <>I led the team. The idea was mine. I defined the product and the interaction flow, and wrote <b>about 95% of the code</b> working with AI agents. I also designed the field-testing method and handled the written submission.</>
          )}
          team={t(
            <>5 人團隊 ChatKTV，成員來自北科大和銘傳。一位隊友寫其餘約 5% 的程式，做簡報並上台報告。另外三位負責研究素材、影片腳本和拍攝，其中一位在賽前訪談了三位視障者。只讓兩個人碰程式是刻意的：三天內要整合看不懂 diff 的人寫的程式，得不償失。</>,
            <>Team ChatKTV, five people from Taipei Tech and Ming Chuan University. One teammate wrote the remaining 5% or so of the code, built the slides and presented. The other three handled research material, the video script and filming. One of them interviewed three blind users before the event. Keeping code to two people was deliberate: in three days, merging code from someone who can't read the diff costs more than it saves.</>
          )}
        />
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose className="mb-10">
          <p>{t('全台視障者約 5.4 萬人，重度以上約 2.25 萬人。', 'Taiwan has about 54,000 blind and low-vision people, about 22,500 of them severe.')}</p>
          <p>
            {t(
              <>公共服務全面改成觸控之後，問題不只是看不到螢幕。<b>從找到機台、確認機台到操作，每一步都可能卡住。</b></>,
              <>Now that public services run on touchscreens, the problem is bigger than not seeing a screen. <b>Finding the kiosk, confirming it and operating it can each break down.</b></>
            )}
          </p>
        </Prose>
        <Items
          cols={3}
          items={[
            { title: t('找到機台難', 'Finding it'), body: t('室內定位不穩。使用者很難知道哪台機器能用、在哪個方向。', 'Indoor positioning is unreliable. It is hard to know which machine works and which way to go.') },
            { title: t('確認機台難', 'Confirming it'), body: t('NFC 感應區很小，貼紙位置也不一樣。走到面前了，還得摸索。', 'NFC zones are small and stickers sit in different places. Even standing in front of it, you still have to search.') },
            { title: t('操作機台難', 'Operating it'), body: t('螢幕是平的，沒有實體回饋。操作時很容易失去自主和隱私。', 'A flat screen gives no physical feedback. Users lose independence and privacy while operating it.') },
          ]}
        />
        <div className="mt-10">
          <Note title={t('法規有用，但很慢，而且只管到金融', 'Regulation works, but slowly, and only for banking')}>
            <p>
              {t(
                <>ATM 是唯一有主管機關盯著的機台。到 2025 年 8 月，視障可用的 ATM 有 <b>7,881 台</b>，還不到全台約 3.35 萬台的 <b>1/4</b>。這是花了八年一台一台改出來的。</>,
                <>ATMs are the only kiosks a regulator watches. By August 2025, <b>7,881</b> ATMs were usable by blind people, less than <b>a quarter</b> of Taiwan's roughly 33,500. That took eight years, one machine at a time.</>
              )}
            </p>
            <p className="mt-2">
              {t(
                '校園列印機、醫院批價機、點餐機和售票機，連這條慢路都沒有。所以我們不改機器，改成讓使用者用自己的手機接手。',
                'Campus printers, hospital payment kiosks, food kiosks and ticket machines don\'t even have that slow path. So instead of changing the machines, we let users take over with their own phones.'
              )}
            </p>
          </Note>
        </div>
      </Section>

      <Section title={t('怎麼運作', 'How it works')} aside={t('手機變成視障者自己的操作介面。', 'The phone becomes the user\'s own interface to the kiosk.')}>
        <Items
          cols={3}
          items={[
            {
              title: t('1. 鏡頭看', '1. See'),
              body: t(
                '走完最後十公尺。鏡頭在手機上辨識機台、門、樓梯和障礙物，轉成「兩點鐘方向」這樣的語音提示。影像不上傳，辨識完就丟掉。',
                'Covers the last ten metres. The camera recognises the kiosk, doors, stairs and obstacles on the phone and turns them into cues like "two o\'clock". Images never leave the phone and are discarded after use.'
              ),
            },
            {
              title: t('2. NFC 確認', '2. Confirm'),
              body: t(
                '碰一下貼紙，手機就知道面前是哪台機器、有哪些選項。鏡頭關掉，螢幕變黑防偷看，語音只進使用者自己的耳機。',
                'One tap on the sticker tells the phone which machine this is and what it offers. The camera turns off, the screen goes dark against prying eyes, and audio goes only to the user\'s own earphones.'
              ),
            },
            {
              title: t('3. 語言模型聽懂', '3. Understand'),
              body: t(
                '使用者說「我要證明我還在念書的那張紙」。語言模型把它換成機台的選項，例如在學證明、2 份，再用語音一步一步帶著做完。',
                'The user says "the paper that proves I\'m still a student". A language model maps it to the kiosk\'s options, such as an enrolment certificate, two copies, and voice guides each step.'
              ),
            },
          ]}
        />
        <div className="mt-10">
          <Items
            items={[
              {
                title: t('安全不交給語言模型', 'Safety never goes to the language model'),
                body: t(
                  <>語言模型只負責聽懂，不做即時的安全判斷。它回應太慢時，手機上的規則會接手。使用者說完，系統先<b>複述一次、等確認</b>才執行。光靠語音，不會直接付款或送出。</>,
                  <>The language model only interprets. It never makes real-time safety calls, and on-device rules take over if it is slow. The system <b>repeats the request and waits for a yes</b> before acting, so voice alone never triggers a payment or submission.</>
                ),
              },
              {
                title: t('沒網路也能用', 'Works offline'),
                body: t(
                  '除了聽懂口語這一步，整個流程都不需要網路。語音用瀏覽器內建的功能，不綁特定硬體或 App 商店。',
                  'Apart from the language step, the whole flow works offline. Speech uses the browser\'s built-in features, so it isn\'t tied to any hardware or app store.'
                ),
              },
            ]}
          />
        </div>
      </Section>

      <Section
        id="demo"
        title={t('線上 Demo', 'Live demo')}
        aside={t(
          '場景是校園文件列印機。可以直接在這裡點。語音和鏡頭需要瀏覽器權限，用手機在新分頁開最完整。',
          'The scenario is a campus document printer. You can click through it here. Voice and camera need browser permission, so it works best in a new tab on a phone.'
        )}
      >
        <Frame
          src={p.demoOpUrl}
          title={t('TapAble · 校園列印機 Demo', 'TapAble · campus printer demo')}
          height="h-[720px]"
          openHref={p.demoOpUrl}
          allow="camera; microphone; autoplay"
        />
        <div className="no-print mt-6 flex flex-wrap gap-3">
          <Button href={p.demoUrl}>{t('入口導覽（有語音介紹）', 'Start page (with voice intro)')}</Button>
          <Button href={p.demoOpUrl}>{t('完整操作 Demo', 'Full walkthrough')}</Button>
          <Button href={p.demoVisionUrl}>{t('鏡頭導引（需要相機）', 'Camera guidance (needs camera)')}</Button>
        </div>
      </Section>

      <Section
        title={t('評選影片', 'Judging video')}
        aside={t('1 分 47 秒。在真實的校園文件列印機前，戴眼罩實測。', '1 minute 47 seconds. Filmed blindfolded at a real campus document printer.')}
      >
        <Frame
          video
          src={p.videoEmbed}
          title={t('TapAble 評選影片', 'TapAble judging video')}
          openHref={p.video}
          openLabel={t('在 YouTube 開啟', 'Open on YouTube')}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Section>

      <Section title={t('驗證了什麼、還沒驗證什麼', 'What we tested, and what we haven\'t')}>
        <h3 className="text-[15px] font-semibold text-ink">{t('做過的驗證', 'What we tested')}</h3>
        <div className="mt-3">
          <List
            items={[
              t('在真實的校園文件列印機前戴眼罩實測，完整跑通取件流程。', 'Ran the full pick-up flow blindfolded at a real campus document printer.'),
              t('賽前訪談 3 位視障者確認需求。概念滿意度 4.67 / 5，只有 3 人，屬於探索性質。', 'Interviewed 3 blind users before the event to confirm the need. Concept satisfaction was 4.67 / 5, from only three people, so it is exploratory.'),
              t('意圖解析有 85 個單元測試，另有 80 個以上的回歸案例。', 'Intent parsing has 85 unit tests plus more than 80 regression cases.'),
              t('axe-core 掃描 18 個畫面，WCAG 2.1 A/AA 違規 0 項。', 'axe-core scan of 18 screens: 0 WCAG 2.1 A/AA violations.'),
              t(
                <>黑客松之後，<b>2 位視障按摩師</b>實際試用了 LINE 版的點餐流程。</>,
                <>After the hackathon, <b>2 visually impaired massage therapists</b> tried the ordering flow in the LINE version.</>
              ),
            ]}
          />
        </div>
        <h3 className="mt-10 text-[15px] font-semibold text-ink">{t('限制', 'Limits')}</h3>
        <div className="mt-3">
          <List
            tone="mute"
            items={[
              t('黑客松提交時，還沒有視障者試用過。戴眼罩實測的都是明眼人。', 'At the hackathon submission, no blind user had tried it yet. Everyone in the blindfold tests was sighted.'),
              t('兩位按摩師的試用是第一次真人回饋，還不能據此說他們能獨立完成。', 'The two therapists\' trial was our first real-user feedback. It does not yet show that they can finish on their own.'),
              t('Demo 裡的 Web NFC 用按鈕模擬。真實機台要能代按按鍵，需要機台營運方配合。', 'Web NFC is simulated with a button in the demo. Pressing buttons on a real kiosk needs the kiosk operator\'s cooperation.'),
              t('早期原型曾用公分報距離。因為沒有實測完成，就拿掉了，不編數字。', 'An early prototype gave distances in centimetres. We hadn\'t finished testing it, so we removed it rather than make up numbers.'),
            ]}
          />
        </div>
      </Section>

      <Section title={t('誰付費、量什麼', 'Who pays, and what we measure')}>
        <Items
          items={[
            {
              title: t('視障者永遠免費', 'Always free for blind users'),
              body: t('付費的是機台擁有者，像銀行、醫院和機台營運方。', 'Kiosk owners pay: banks, hospitals and kiosk operators.'),
            },
            {
              title: t('北極星指標：獨立完成率', 'North star: independent completion rate'),
              body: t(
                <>我們要量的不是 AI 多準，而是<b>使用者能不能不靠別人，真的把事情做完</b>。這個數字也是企業能追蹤的普惠金融和 ESG 成果。</>,
                <>We don't measure how accurate the AI is. We measure <b>whether people finish the task without help</b>. Kiosk owners can track that same number as financial inclusion and ESG progress.</>
              ),
            },
          ]}
        />
        <div className="mt-10">
          <Note>
            {t(
              '「機台不用改」只對語音引導這一層成立。要真的替使用者按下機台按鍵，需要機台端配合。實施細節不公開。',
              '"No change to the kiosk" holds for the voice guidance layer only. Actually pressing the kiosk\'s buttons for the user needs the kiosk side to cooperate. Implementation details are not public.'
            )}
          </Note>
        </div>
      </Section>

      <Section title={t('同一個題目，一路做下來', 'One idea, six competitions')} aside={t('從第一版的簡報，到 LINE 上可以點餐的版本。', 'From first-version slides to a LINE version you can order food with.')}>
        <Timeline rows={lineage} />
      </Section>

      <Section title={t('畫面', 'Screens')}>
        <Gallery shots={shots} />
      </Section>

      <CaseFooter>
        <Button href={p.demoUrl}>{t('開啟 Demo', 'Open demo')}</Button>
      </CaseFooter>
    </main>
  )
}
