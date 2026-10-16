import React from 'react'
import { projects } from '../data/profile.js'
import { useT, useTitle } from '../i18n.jsx'
import { Button, CaseHeader, CaseFooter, Section, Prose, Roles, Items, List, Note, Gallery } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'atcc-beacon')

export default function ProjectBeacon() {
  const t = useT()
  useTitle('BEACON 兒少心理支持 · 徐浩華', 'BEACON youth mental-health support · Ken Chui')

  const shots = [
    { src: '/atcc/cover.png', caption: t('BEACON 計畫，一套主動發現孩子狀況的心理支持系統。', 'BEACON, a support system that finds children who need help before they ask.') },
    { src: '/atcc/problem.png', caption: t('孩子需要的不是被輔導，而是自然被接住。', 'Children do not need to be counselled. They need to be caught gently.') },
    { src: '/atcc/funnel.png', caption: t('核心機制，用數據驅動的 OMO 三層預警漏斗。', 'The core mechanism, a three-layer OMO alert funnel driven by data.') },
    { src: '/atcc/roblox.png', caption: t('Roblox 場景，從家到學校，再到防空洞。', 'Roblox scenes: home, school, then the shelter.') },
    { src: '/atcc/channels.png', caption: t('校園端由隊友設計，包含 LINE ARG 校園怪談和實體工作坊。', 'The school-side channels, designed by teammates: a LINE ARG mystery and an in-person workshop.') },
    { src: '/atcc/impact.png', caption: t('從被動等待來電的熱線，轉成主動預警。', 'From a hotline that waits for calls to early, active alerts.') },
  ]

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t(p.period)}
        title={t(p.title)}
        org={t(p.org)}
        event={t('林堉璘宏泰教育基金會 × 張老師基金會 出題', 'Case set by the Lin Yu-Lin Hung Tai Education Foundation and the Teacher Chang Foundation')}
        summary={t(
          '台灣兒少自殺通報創十年新高，但現有輔導多半要等孩子自己開口。BEACON 把心理初篩放進孩子本來就在玩的 Roblox，用行為數據分出綠、黃、紅三級，讓需要幫忙的孩子早一點被發現。',
          'Youth suicide reports in Taiwan are at a ten-year high, yet most support still waits for a child to ask for help. BEACON puts light mental-health screening inside Roblox, a game kids already play, and uses behaviour data to sort them into green, amber and red, so children who need help are found sooner.'
        )}
        actions={
          <>
            <Button primary href={p.pdf}>{t('下載提案簡報 PDF', 'Download the deck (PDF)')}</Button>
            <Button href="#deck">{t('看提案畫面', 'See the slides')}</Button>
          </>
        }
        facts={[
          { label: t('成績', 'Result'), value: t('全國 26 強', 'Top 26 nationwide') },
          { label: t('階段', 'Stage'), value: t('初賽決選', 'Quarter-final') },
          { label: t('主要平台', 'Platform'), value: 'Roblox' },
          { label: t('預警分級', 'Alert levels'), value: t('綠、黃、紅', 'Green, amber, red') },
        ]}
      />

      <Section title={t('我的分工', 'My role')}>
        <Roles
          mine={
            <>
              <b>{t('系統機制設計', 'System mechanism design')}</b>
              {t('。', '. ')}
              <b>{t('OMO 數據漏斗', 'The OMO data funnel')}</b>
              {t('，包含 Mixpanel 行為分析和綠黃紅三級分流。', ', including Mixpanel behaviour analysis and the green, amber and red triage. ')}
              <b>{t('商業模式和三年財務', 'The business model and three-year financials')}</b>
              {t('。', '. ')}
              <b>{t('Roblox 場景', 'The Roblox scenes')}</b>
              {t('，用 AI 工具做出概念畫面。', ', with concept visuals made using AI tools.')}
            </>
          }
          team={t(
            '團隊 E12 / KTV Lab。LINE ARG 校園怪談和實體工作坊由隊友設計。',
            'Team E12 / KTV Lab. Teammates designed the LINE ARG mystery game and the in-person workshop.'
          )}
        />
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose>
          <p>
            {t(
              '現有的輔導機制靠孩子主動求助。可是情緒越低落的孩子，越開不了口。',
              'Current school support relies on children asking for help. The children struggling most are often the least able to ask.'
            )}
          </p>
          <p>
            <b>{t('45% 的高風險個案', '45% of high-risk cases')}</b>
            {t(
              '，在危機發生前從未接觸過任何心理資源。等到孩子開口，往往已經很晚了。',
              ' had never had contact with any mental-health resource before the crisis. By the time a child speaks up, it is often late.'
            )}
          </p>
          <p>
            {t(
              '我們的出發點是，孩子不想被當成需要輔導的人。比較好的做法，是在他們本來就在的地方，自然地接住他們。',
              'Our starting point: children resist being treated as someone who needs counselling. It works better to reach them, quietly, where they already are.'
            )}
          </p>
        </Prose>
      </Section>

      <Section
        title={t('以 Roblox 為主場', 'Built on Roblox')}
        aside={t('這是比賽提案。Roblox 場景是概念設計，沒有上線。', 'This is a competition proposal. The Roblox scenes are concept designs, not a live game.')}
      >
        <Prose>
          <p>
            {t(
              '孩子在 Roblox 裡佈置自己的家，順手記錄心情。行為出現異常時，遊戲用任務引導他進入「防空洞」，做第二次篩檢。',
              'In Roblox, a child decorates their own home and logs their mood along the way. When their behaviour shifts, a quest leads them into a "shelter" for a second screening.'
            )}
          </p>
          <p>
            {t(
              '遊戲裡不開放文字和語音，情緒用雲朵和花朵的畫面表達。這樣可以避免霸凌。',
              'Text and voice chat are turned off. Feelings show up as clouds and flowers instead, which keeps bullying out.'
            )}
          </p>
        </Prose>
        <div className="mt-10">
          <Items
            cols={2}
            items={[
              {
                title: t('LINE ARG 校園怪談（隊友設計）', 'LINE ARG mystery (teammates)'),
                body: t(
                  '免安裝的文字解謎《尋找失蹤的 K 學姊》，把心理投射測驗藏在劇情裡，掃 QR code 就能玩。用來在校園做大規模、低門檻的初篩。',
                  'A no-install text mystery, "Finding the missing senior K", with a projective test woven into the story. Students scan a QR code to play. It allows wide, low-effort screening at schools.'
                ),
              },
              {
                title: t('喵汪偵探社工作坊（隊友設計）', 'Detective workshop (teammates)'),
                body: t(
                  '實體解謎加上藝術治療，例如「雨中的我」投射繪畫。用 iPad 機台減輕志工負擔，補上數位工具看不到的情緒。',
                  'An in-person puzzle session with art therapy, such as the "me in the rain" drawing exercise. iPad stations lighten the volunteers\' load and catch what digital tools miss.'
                ),
              },
            ]}
          />
        </div>
      </Section>

      <Section title={t('三層預警漏斗', 'The three-layer alert funnel')} aside={t('這一段是我設計的。', 'I designed this part.')}>
        <List
          items={[
            <>
              <b>{t('第一層，數據捕捉。', 'Layer 1, capture. ')}</b>
              {t('匿名記錄孩子在遊戲裡的行為。', 'Record in-game behaviour anonymously.')}
            </>,
            <>
              <b>{t('第二層，Mixpanel 預警。', 'Layer 2, Mixpanel alerts. ')}</b>
              {t('把壓力訊號量化，自動分成綠、黃、紅三級。', 'Turn stress signals into scores and sort each child into green, amber or red.')}
            </>,
            <>
              <b>{t('第三層，分級接手。', 'Layer 3, hand-off. ')}</b>
              {t('綠燈由系統陪伴，黃燈由張老師志工介入，紅燈轉介 1980 專業諮商。', 'Green stays with the system. Amber goes to Teacher Chang volunteers. Red is referred to professional counselling through the 1980 hotline.')}
            </>,
          ]}
        />
        <p className="mt-6 max-w-prose text-[15px] leading-[1.7] text-ink2">
          {t(
            '全程去識別化，孩子不會被貼上標籤。',
            'Data is de-identified throughout, and no child is labelled.'
          )}
        </p>
      </Section>

      <Section title={t('商業模式', 'Business model')} aside={t('原則是不從弱勢身上賺錢。', 'The rule: never profit from the children it serves.')}>
        <Items
          items={[
            {
              title: t('三個收入來源', 'Three revenue sources'),
              body: t(
                '企業以 ESG 名義採購給學校，每校每年 5 萬元，學校免費拿到教材。另有 Roblox 品牌贊助，以及數發部、衛福部、教育部的政府補助。三年推估總營收約 350 萬元。',
                'Companies fund schools through ESG budgets at NT$50,000 per school per year, so schools get the materials free. Brand sponsorship on Roblox and government grants from the digital, health and education ministries add the rest. Projected revenue is about NT$3.5 million over three years.'
              ),
            },
            {
              title: t('專業和技術分工', 'Who does what'),
              body: t(
                '張老師專心做專業輔導，團隊負責技術架構。紅燈個案的諮商費用由補助池支應，回饋弱勢家庭。',
                'Teacher Chang focuses on counselling. The team owns the technology. A subsidy pool pays for red-level counselling for disadvantaged families.'
              ),
            },
          ]}
        />
      </Section>

      <Section id="deck" title={t('提案畫面', 'From the deck')} aside={t('點圖片可看大圖。', 'Click an image to open it full size.')}>
        <Gallery shots={shots} />
        <div className="mt-12 max-w-prose">
          <Note>
            {t(
              '如果你或身邊的人正感到難以承受，可以撥 1925 安心專線（24 小時）或 1980 張老師專線。',
              'If you or someone near you in Taiwan is struggling, call the 1925 Mental Health Hotline (24 hours) or the 1980 Teacher Chang line.'
            )}
          </Note>
        </div>
      </Section>

      <CaseFooter>
        <Button href={p.pdf}>{t('下載提案簡報', 'Download the deck')}</Button>
      </CaseFooter>
    </main>
  )
}
