import React from 'react'
import { projects } from '../data/profile.js'
import { useT, useTitle } from '../i18n.jsx'
import { Button, CaseHeader, Section, Prose, Roles, Items, List, Note, Frame, CaseFooter } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'ppa-hackathon')

export default function ProjectPPA() {
  const t = useT()
  useTitle('PressPlay AI 學習助教 · 徐浩華', 'PressPlay AI tutor · Ken Chui')

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t('2026/07/14–16', 'Jul 14–16, 2026')}
        title={t(p.title)}
        org={t('AWS Summit Taipei 2026 · 百工百業瘋 AI 黑客松', 'AWS Summit Taipei 2026 · AI Everywhere Hackathon')}
        event={t('數位學習組', 'EdTech track')}
        summary={t(
          'PressPlay Academy 的 AI 助教很有效，但很少人用。我從官方資料找出學員在哪裡離開，把助教改成會主動出手。我一個晚上做出 9 個畫面的原型，並部署到 AWS。',
          'PressPlay Academy’s AI tutor worked well, but few learners used it. I used the official data to find where learners drop off, and redesigned the tutor to step in on its own. I built a 9-screen prototype overnight and deployed it on AWS.'
        )}
        actions={
          <>
            <Button primary href={p.demoPath}>{t('開啟互動 Demo', 'Open the demo')}</Button>
            <Button href={p.repo}>{t('GitHub 原始碼', 'Source on GitHub')}</Button>
          </>
        }
        facts={[
          { label: t('成績', 'Result'), value: t('第二名', '2nd place') },
          { label: t('開發時間', 'Build time'), value: t('一個晚上', 'One night') },
          { label: t('原型', 'Prototype'), value: t('9 個畫面', '9 screens') },
          { label: t('產品開發', 'Product build'), value: t('我一人完成', 'Solo') },
        ]}
      />

      <Section title={t('我做了什麼', 'What I did')}>
        <Roles
          mine={t(
            <>痛點分析、用 Python 跑官方資料、產品策略、遊戲化設計、全部 UI/UX、前端開發，以及 AWS 部署。<b>從零到上線都是我做的。</b></>,
            <>Problem analysis, Python analysis of the official data, product strategy, game design, all UI/UX, front-end code and AWS deployment. <b>I took it from zero to live.</b></>
          )}
          team={t(
            '現場簡報由隊友負責。吉祥物 PiPi 由設計組隊友繪製。',
            'A teammate gave the live presentation. Our designer drew the PiPi mascot.'
          )}
        />
        <div className="mt-10">
          <Note title={t('時間線', 'Timeline')}>
            {t(
              '題目在星期二公布。那時我在交流團，星期三晚上才回家，團隊也是那晚第一次開會。我當晚凌晨開工，隔天交出可以操作的原型。',
              'The brief came out on Tuesday. I was away on an exchange trip and got home Wednesday night, when the team met for the first time. I started after midnight and handed in a working prototype the next day.'
            )}
          </Note>
        </div>
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose>
          <p>
            {t(
              <>命題方是線上學習平台 PressPlay Academy。他們的難題很矛盾。<b>AI 助教效果很好，卻沒什麼人用。</b></>,
              <>The brief came from PressPlay Academy, an online learning platform. Their problem was a paradox. <b>The AI tutor worked, but almost no one used it.</b></>
            )}
          </p>
        </Prose>
        <div className="mt-10">
          <Items
            cols={3}
            items={[
              {
                title: t('效果很好', 'It works'),
                body: t(
                  '用過 AI 助教的學員，影片觀看多 700%，Session 多 84%，活躍天數多 52%。',
                  'Learners who used the tutor watched 700% more video, had 84% more sessions and 52% more active days.'
                ),
              },
              {
                title: t('但很少人用', 'Few people use it'),
                body: t(
                  'AI 助教的滲透率只有 11.7%。DAU/MAU 從 29% 掉到 10% 以下。',
                  'Only 11.7% of users tried the tutor. DAU/MAU fell from 29% to under 10%.'
                ),
              },
              {
                title: t('官方的疑問', 'The open question'),
                body: t(
                  '遊戲化的滲透率有 42%，但官方不確定它能帶動看課。我的方案必須回答這一點。',
                  'Gamification reached 42% of users, but the company could not tell whether it drove learning. My plan had to answer that.'
                ),
              },
            ]}
          />
        </div>
        <h3 className="mt-12 text-[15px] font-semibold text-ink">{t('我在官方資料裡找到的斷點', 'Where learners drop off, from the official data')}</h3>
        <div className="mt-4">
          <List
            items={[
              t(
                <><b>39.6%</b> 的 AI 對話問一次就結束。每段對話平均只有 6.68 則訊息。</>,
                <><b>39.6%</b> of AI conversations ended after one question. The average conversation had just 6.68 messages.</>
              ),
              t(
                <>只有 <b>13.2%</b> 的行為是在學習。另有 <b>20.5%</b> 停在「其他」，四處亂逛。</>,
                <>Only <b>13.2%</b> of activity was actual learning. Another <b>20.5%</b> was users wandering under “other”.</>
              ),
              t(
                <>課程分成 <b>145 類</b>。通用推薦很難命中，需要 AI 依每個人推薦。</>,
                <>Courses span <b>145 categories</b>. Generic recommendations rarely land, so the AI needs to recommend per person.</>
              ),
            ]}
          />
        </div>
      </Section>

      <Section title={t('讓 AI 主動出手', 'A tutor that steps in first')}>
        <Items
          cols={3}
          items={[
            {
              title: t('主動出現', 'Act first'),
              body: t(
                'AI 不再等學員發問。答錯、看完課、或對話快冷掉時，它主動給出知識缺口雷達和下一步建議。',
                'The tutor no longer waits to be asked. When a learner gets a question wrong, finishes a lesson or goes quiet, it shows a knowledge-gap radar and a next step.'
              ),
            },
            {
              title: t('一份課，多種形式', 'One course, many formats'),
              body: t(
                'AI 把同一份課程轉成挑戰題、45 秒精華、電子書、Podcast 和雷達診斷，配合不同的學習時刻。',
                'The AI turns one course into quiz challenges, 45-second highlights, an e-book, a podcast and a radar check-up, to fit different moments in a learner’s day.'
              ),
            },
            {
              title: t('讓更多人用到 AI', 'Reach more users'),
              body: t(
                '45 秒精華加上遊戲化回訪，把非會員轉成會員。能用到 AI 的人變多，滲透率和活躍天數一起上升。',
                '45-second highlights and game-style return visits turn non-members into members. More people can reach the AI, which lifts both adoption and active days.'
              ),
            },
          ]}
        />
        <div className="mt-10">
          <Note title={t('回答官方的疑問', 'Answering the open question')}>
            {t(
              <>我把遊戲化綁在學習行為上。吉祥物 PiPi 的經驗值<b>只能</b>靠看課或使用 AI 取得。排行榜分成日、週、月和總榜，新人也有機會上榜。六角徽章和學習戰隊負責把人找回來。我也設計了 A/B 實驗，用來驗證遊戲化是否真的帶動看課。</>,
              <>I tied the game to learning. The PiPi mascot earns XP <b>only</b> when the learner watches a course or uses the AI. Leaderboards run daily, weekly, monthly and all-time, so newcomers can rank too. Hexagon badges and study squads bring people back. I also designed an A/B test to check whether the game really drives course viewing.</>
            )}
          </Note>
        </div>
      </Section>

      <Section
        title={t('可以操作的 Demo', 'Try the demo')}
        aside={t(
          '比賽用的 AWS 環境已經回收。這裡是永久保存的靜態版本，可以直接點。',
          'The competition AWS environment has been shut down. This is a permanent static copy you can click through.'
        )}
      >
        <Frame
          src={p.demoPath}
          title={t('PressPlay AI 學習助教 · 手機版原型', 'PressPlay AI tutor · mobile prototype')}
          height="h-[720px]"
          openHref={p.demoPath}
        />
      </Section>

      <Section title={t('技術與成果', 'Stack and result')}>
        <List
          items={[
            t(
              '前端用 React、Vite 和 Tailwind CSS。雷達圖用純 SVG 畫。',
              'Front end in React, Vite and Tailwind CSS. The radar chart is plain SVG.'
            ),
            t('部署在 AWS Amplify Hosting。', 'Hosted on AWS Amplify Hosting.'),
            t(
              '架構設計規劃了 Amazon Bedrock 和 DynamoDB，原型裡沒有實作。',
              'The architecture plan used Amazon Bedrock and DynamoDB. The prototype does not implement them.'
            ),
            t('資料分析用 Python。', 'Data analysis in Python.'),
          ]}
        />
        <Prose className="mt-8">
          <p>
            {t(
              '最後拿下數位學習組第二名。評審看到的是一個能操作的原型、一組有資料佐證的問題，以及一個回應遊戲化疑慮的具體機制。',
              'We placed 2nd in the EdTech track. The judges saw a working prototype, a problem backed by data, and a concrete answer to their doubts about gamification.'
            )}
          </p>
        </Prose>
      </Section>

      <CaseFooter>
        <Button href={p.demoPath}>{t('開啟 Demo', 'Open the demo')}</Button>
        <Button href={p.repo}>GitHub</Button>
      </CaseFooter>
    </main>
  )
}
