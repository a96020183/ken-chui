import React from 'react'
import { projects } from '../data/profile.js'
import { useT, useTitle } from '../i18n.jsx'
import { Button, CaseHeader, CaseFooter, Section, Prose, Roles, Items, Note, Gallery } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'jinyun-branding')

export default function ProjectJinYun() {
  const t = useT()
  useTitle('金孕獎推廣策略 · 徐浩華', 'Golden Pregnancy Award strategy · Ken Chui')

  const shots = [
    { src: '/jinyun/cover.png', caption: t('提案封面：金孕獎，金色評委陪你孕出健康小將。', 'Cover slide of the proposal.') },
    { src: '/jinyun/swot.png', caption: t('SWOT 分析，以及由此推出的改善策略。', 'SWOT analysis and the strategy that follows from it.') },
    { src: '/jinyun/audience.png', caption: t('客群、通路、社群平台和影響者分析。', 'Audience, channel, social platform and influencer analysis.') },
    { src: '/jinyun/points.png', caption: t('網站升級：用點數制度提高回訪。', 'Website upgrade: a points system to bring people back.') },
    { src: '/jinyun/wom5t.png', caption: t('口碑行銷 5T 架構和活動排程。', 'The 5T word-of-mouth framework and campaign schedule.') },
    { src: '/jinyun/impact.png', caption: t('預期效益：用 UGC 加上四度分隔理論推估擴散。', 'Expected impact: reach estimated from UGC and four degrees of separation.') },
  ]

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t(p.period)}
        title={t(p.title)}
        org={t(p.org)}
        event={t('第三題：金孕獎推廣策略', 'Topic 3: promoting the Golden Pregnancy Award')}
        summary={t(
          '金孕獎是台灣母嬰產業的獎項，但一般爸媽很少聽過。我們的提案分兩步。先讓官網留得住人，再用口碑把獎項推出去。',
          'The Golden Pregnancy Award is Taiwan\'s award for the maternal and baby industry, yet most parents have never heard of it. Our plan had two steps: give people a reason to stay on the website, then spread the award through word of mouth.'
        )}
        actions={
          <>
            <Button primary href={p.pdf}>{t('下載提案簡報 PDF', 'Download the deck (PDF)')}</Button>
            <Button href="#deck">{t('看提案畫面', 'See the slides')}</Button>
          </>
        }
        facts={[
          { label: t('成績', 'Result'), value: t('銀質獎', 'Silver award') },
          { label: t('參賽隊伍', 'Teams entered'), value: '196' },
          { label: t('總決賽', 'Final'), value: '2024/12/27' },
          { label: t('團隊', 'Team'), value: t('5 人', '5 people') },
        ]}
      />

      <Section title={t('我的分工', 'My role')}>
        <Roles
          mine={
            <>
              {t('我負責四塊。', 'I owned four parts: ')}
              <b>{t('受眾、通路、社群和影響者分析', 'audience, channel, social and influencer analysis')}</b>
              {t('；', '; ')}
              <b>{t('網站升級和點數遊戲化', 'the website upgrade and points system')}</b>
              {t('；', '; ')}
              <b>{t('口碑行銷 5T', 'the 5T word-of-mouth plan')}</b>
              {t('；', '; and ')}
              <b>{t('預期效益和成本試算', 'expected impact and cost estimates')}</b>
              {t('。', '.')}
            </>
          }
          team={t(
            '5 人團隊，組長林亭汝，指導老師黃增隆教授。組員負責簡報製作和現場報告。',
            'Five-person team with a student lead and a faculty advisor. Teammates built the slides and gave the live presentation.'
          )}
        />
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose>
          <p>
            {t(
              '金孕獎在業界有份量，但消費者幾乎不知道它。爸媽挑產品時，還不會參考這個獎。',
              'The award carries weight inside the industry, but consumers barely know it. Parents do not look at it when choosing products.'
            )}
          </p>
          <p>
            {t('執行單位 MamiGuide 的官網每月約 11 萬人次造訪，', 'The organizer, MamiGuide, gets about 110,000 website visits a month, and ')}
            <b>{t('59% 的人看完第一頁就離開', '59% leave after the first page')}</b>
            {t('。網站沒有讓人留下來的理由。', '. The site gives people no reason to stay.')}
          </p>
        </Prose>
        <div className="mt-8 max-w-prose">
          <Note title={t('機會在哪裡', 'Where the opening is')}>
            {t(
              '99% 的新手爸媽遇到問題會上網找答案。內容夠專業、平台好用，就接得住這些人。',
              '99% of new parents search online when they hit a problem. With expert content and a usable site, the award can catch them.'
            )}
          </Note>
        </div>
      </Section>

      <Section title={t('我的做法', 'What I did')}>
        <Items
          items={[
            {
              title: t('受眾與通路分析', 'Audience and channels'),
              body: t(
                '把客群分成備孕、懷孕、嬰兒期三個階段。通路以綜合電商為主，佔 37%。社群的主戰場是 FB 和 IG。再比較 KOL 和 KOC，決定從哪裡切入。',
                'I split the audience into three stages: trying to conceive, pregnant, and baby. General e-commerce is the main channel at 37%. Facebook and Instagram are where the conversation happens. I compared KOLs and KOCs to choose where to start.'
              ),
            },
            {
              title: t('網站升級與點數制度', 'Website upgrade and points'),
              body: t(
                '官網加上討論區、評論區和專家交流站。註冊、互動、推薦朋友都能拿點數，點數可以折抵或兌換。目的是讓人願意再回來。',
                'I added a forum, a review section and an expert Q&A area to the site. Signing up, taking part and referring friends earn points that can be redeemed. The goal is to bring people back.'
              ),
            },
            {
              title: t('軟性推廣與口碑 5T', 'Content and word of mouth'),
              body: t(
                '借金孕獎的專業背書，替三個階段的爸媽各做他們關心的內容，投放在 FB、IG、Dcard 和 PTT。口碑照 5T 架構規劃，分成 Talkers、Topics、Tools、Taking Part、Tracking，再搭配試用品活動。',
                'I used the award\'s credibility to make content for each parent stage and placed it on Facebook, Instagram, Dcard and PTT. Word of mouth followed the 5T framework (Talkers, Topics, Tools, Taking Part, Tracking), backed by a product-trial campaign.'
              ),
            },
            {
              title: t('預期效益與成本', 'Expected impact and cost'),
              body: t(
                '用 UGC 創作者加上四度分隔理論推估擴散範圍，推估官網成長 26% 到 46%。再用單利和複利兩種成長模型，對照網站、口碑、試用和專家四項成本，確認做得起來。',
                'I estimated reach from UGC creators and four degrees of separation, projecting 26–46% growth for the website. I then checked feasibility with simple and compound growth models against four cost lines: website, word of mouth, trials and experts.'
              ),
            },
          ]}
        />
        <p className="mt-10 max-w-prose text-[14.5px] leading-relaxed text-mute">
          {t(
            '提案最後提了下一步。這套結合知識、情感支持和專業建議的平台，可以複製到東南亞的母嬰市場。',
            'The proposal ends with a next step: take the same mix of knowledge, peer support and expert advice to maternal and baby markets in Southeast Asia.'
          )}
        </p>
      </Section>

      <Section id="deck" title={t('提案畫面', 'From the deck')} aside={t('點圖片可看大圖。', 'Click an image to open it full size.')}>
        <Gallery shots={shots} />
      </Section>

      <CaseFooter>
        <Button href={p.pdf}>{t('下載提案簡報', 'Download the deck')}</Button>
      </CaseFooter>
    </main>
  )
}
