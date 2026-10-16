import React from 'react'
import { projects } from '../data/profile.js'
import { useT, useTitle } from '../i18n.jsx'
import { Button, CaseHeader, Section, Prose, Roles, Items, List, Note, Gallery, CaseFooter } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'bnp-insurhack')

export default function ProjectBNP() {
  const t = useT()
  useTitle('保包巴士 · 徐浩華', 'Baobao Bus · Ken Chui')

  // 封面 cover.png 含隊友 email，不放
  const shots = [
    {
      src: '/bnp/business-model.png',
      caption: t('商業模式：從賣保單改成訂閱生活', 'Business model: from selling policies to a lifestyle subscription'),
    },
    {
      src: '/bnp/pricing.png',
      caption: t('三種訂閱方案，月費 99、199、299 元起', 'Three subscription tiers, from NT$99, 199 and 299 a month'),
    },
    {
      src: '/bnp/tech.png',
      caption: t('技術可行性：資料先用 SHA-256 脫敏，再在 Data Clean Room 比對', 'Technical feasibility: data hashed with SHA-256, then matched in a data clean room'),
    },
    {
      src: '/bnp/funnel.png',
      caption: t('第一年獲客漏斗：5 萬名 LINE 好友，轉成 1,000 位訂閱會員', 'Year-one funnel: 50,000 LINE friends to 1,000 subscribers'),
    },
    {
      src: '/bnp/economics.png',
      caption: t('經濟模型：單位經濟、CAC 回收、三種情境測試', 'Economics: unit economics, CAC payback and three scenarios'),
    },
  ]

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t(p.period)}
        title={t(p.title)}
        org={t('法國巴黎人壽', 'BNP Paribas Cardif Taiwan')}
        event={t('第三屆 Cardif InsurHack', '3rd Cardif InsurHack')}
        summary={t(
          '年輕人不是不想買保險，是覺得太貴。我們把一年繳一次的保險，改成每月 99 元起的生活訂閱，透過 LINE 在對的時刻推薦。這份 42 頁企劃裡，商業模式、財務模型和技術可行性由我負責。',
          'Young people in Taiwan want insurance but find it too expensive. We turned a once-a-year purchase into a monthly subscription from NT$99, offered through LINE at the moment it is relevant. In the 42-page plan, I owned the business model, financial model and technical feasibility.'
        )}
        actions={<Button primary href={p.pdf}>{t('看完整企劃書 PDF', 'Read the full plan (PDF)')}</Button>}
        facts={[
          { label: t('成績', 'Result'), value: t('第二名（銀獎）', '2nd place (Silver)') },
          { label: t('時間', 'Date'), value: t(p.period) },
          { label: t('團隊', 'Team'), value: t('5 人', '5 people') },
          { label: t('企劃書', 'Plan'), value: t('42 頁', '42 pages') },
        ]}
      />

      <Section title={t('我做了什麼', 'What I did')}>
        <Roles
          mine={t(
            <>參與提案發想，並負責<b>商業模式</b>、<b>財務模型</b>和<b>技術可行性</b>。也就是回答三件事：這門生意成不成立，錢怎麼算，技術做不做得到。</>,
            <>I helped shape the idea and owned the <b>business model</b>, <b>financial model</b> and <b>technical feasibility</b>. In short, I answered three questions. Does the business work, do the numbers add up, and can it be built?</>
          )}
          team={t(
            '五人團隊，組長由隊友擔任。心理測驗的設計和 UI 由其他隊員負責。',
            'A team of five, led by a teammate. Other members designed the personality quiz and its UI.'
          )}
        />
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose>
          <p>
            {t(
              '台灣壽險市場已經飽和。投保率 70.9%，平均每人 2.6 張保單，成長停住了。',
              'Taiwan’s life insurance market is saturated. Coverage is 70.9%, with 2.6 policies per person, and growth has stalled.'
            )}
          </p>
          <p>
            {t(
              <>但 18 到 29 歲的人，<b>82%</b> 願意再買保險。卡住他們的是預算，他們覺得保費太貴。</>,
              <>Yet <b>82%</b> of people aged 18 to 29 are willing to buy more cover. What stops them is budget. Premiums feel too high.</>
            )}
          </p>
        </Prose>
        <div className="mt-10">
          <Items
            cols={3}
            items={[
              {
                title: t('不想買', 'Not interested'),
                body: t(
                  '業務推銷讓年輕人有防備心。一年的保費，他們會拿去跟 iPhone 比。',
                  'Sales pitches put young people on guard. They compare a year’s premium with the price of an iPhone.'
                ),
              },
              {
                title: t('看不懂', 'Hard to understand'),
                body: t(
                  '條款難懂，流程繁瑣，資訊不透明。光是開始投保就很難。',
                  'Terms are dense, the process is slow and pricing is opaque. Just getting started is hard.'
                ),
              },
              {
                title: t('沒感覺', 'Out of sight'),
                body: t(
                  '一年只在繳費時碰到一次。保險和日常生活沒有關係。',
                  'People think about insurance once a year, when the bill arrives. It has no place in daily life.'
                ),
              },
            ]}
          />
        </div>
      </Section>

      <Section title={t('保包巴士：把保險變成生活服務', 'Baobao Bus: insurance as an everyday service')}>
        <Items
          cols={3}
          items={[
            {
              title: t('在對的時刻出現', 'Show up at the right moment'),
              body: t(
                '訂機票或辦健身卡時，系統透過 LINE 推送個人化的保障建議。保險在需要的當下才出現。',
                'When someone books a flight or joins a gym, LINE sends a personal cover suggestion. Insurance appears when it matters.'
              ),
            },
            {
              title: t('改成月訂閱', 'Monthly subscription'),
              body: t(
                '每月 99 元起，取代一年一次的大筆決定。門檻變低，也慢慢養成保障的習慣。',
                'From NT$99 a month instead of one big yearly decision. It lowers the barrier and builds a habit.'
              ),
            },
            {
              title: t('用點數折抵', 'Points that lower the price'),
              body: t(
                '健康行為、續訂和分享都能累積點數，折抵保費。越健康就越便宜，也就越想續訂。',
                'Healthy habits, renewals and referrals earn points that reduce the premium. Healthier means cheaper, which makes people stay.'
              ),
            },
          ]}
        />
      </Section>

      <Section title={t('商業模式：從賣保單到經營會員', 'Business model: from selling policies to keeping members')}>
        <Items
          items={[
            {
              title: t('三個階段', 'Three phases'),
              body: t(
                <>先用低毛利的意外險訂閱<b>圈住客群</b>。再靠高頻互動和點數<b>留住人</b>。之後再轉向高毛利的壽險<b>變現</b>。前期讓利，換來數據和長期關係。</>,
                <>First, <b>win customers</b> with a low-margin accident-cover subscription. Then <b>keep them</b> with frequent touchpoints and points. Later, <b>monetize</b> through higher-margin life insurance. Early margin is traded for data and long-term relationships.</>
              ),
            },
            {
              title: t('為什麼做低毛利訂閱', 'Why a low-margin subscription'),
              body: t(
                '傳統獲客成本高，客戶在投保前的樣貌也看不到。訂閱讓公司一年接觸客戶 12 次以上，累積投保前的生活情境和風險偏好。這是壽險業很缺的第一方數據。',
                'Traditional acquisition is expensive, and insurers know little about customers before they buy. A subscription means 12 or more touchpoints a year, building first-party data on lifestyle and risk preferences before a policy is sold. Life insurers rarely have this data.'
              ),
            },
          ]}
        />
      </Section>

      <Section title={t('財務模型：這門生意算得過來', 'Financial model: the numbers work')}>
        <Items
          items={[
            {
              title: t('單位經濟', 'Unit economics'),
              body: t(
                <>月費 199 元，扣掉變動成本 11 元，<b>每位會員每月貢獻約 188 元</b>。每一位訂閱會員都是正貢獻，訂閱本身不虧錢。</>,
                <>A NT$199 monthly fee minus NT$11 in variable cost leaves <b>about NT$188 per member per month</b>. Every subscriber contributes positively, so the subscription itself does not lose money.</>
              ),
            },
            {
              title: t('獲客成本回收', 'CAC payback'),
              body: t(
                <>獲客成本 200 到 500 元。會員留超過 <b>3 個月</b>就能回收。1,000 位會員一年的經常性收入約 <b>240 萬元</b>。</>,
                <>Customer acquisition costs NT$200 to 500. A member who stays <b>3 months</b> pays that back. 1,000 members bring about <b>NT$2.4 million</b> in annual recurring revenue.</>
              ),
            },
          ]}
        />
        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">{t('三種情境的壓力測試', 'Stress test across three scenarios')}</h3>
          <div className="mt-4">
            <List
              items={[
                t(<><b>保守</b>情境回收 564 元，不虧損。</>, <><b>Conservative</b>: NT$564 recovered, no loss.</>),
                t(<><b>基準</b>情境回收 1,128 元，現金流健康。</>, <><b>Base</b>: NT$1,128 recovered, healthy cash flow.</>),
                t(<><b>樂觀</b>情境回收 2,256 元，LTV 高。</>, <><b>Optimistic</b>: NT$2,256 recovered, high LTV.</>),
              ]}
            />
          </div>
        </div>
        <div className="mt-8">
          <Note>
            {t(
              '就算不算壽險轉換，模型也成立。另外設了三道防線，分別是自動化抵銷成本、防止逆選擇，以及退訂的財務門檻。',
              'The model holds even without any life-insurance conversion. Three safeguards back it up. Automation offsets cost, a guard blocks adverse selection, and a financial threshold applies to cancellations.'
            )}
          </Note>
        </div>
      </Section>

      <Section title={t('技術可行性：合規，也做得出來', 'Technical feasibility: compliant and buildable')}>
        <Items
          items={[
            {
              title: t('全部在 LINE 裡完成', 'All inside LINE'),
              body: t(
                '用 LINE 官方帳號、LIFF 和 LINE Pay，完成身分驗證、試算和付款。不用另外下載 App，成本和棄單率都更低。',
                'A LINE Official Account, LIFF and LINE Pay handle identity checks, quotes and payment. No separate app to download, which cuts cost and drop-off.'
              ),
            },
            {
              title: t('精準推薦，不外洩個資', 'Targeting without exposing personal data'),
              body: t(
                <>Klook、KKday 等合作夥伴的資料先用 <b>SHA-256</b> 雜湊，再放進 Data Clean Room，只比對雙方共同的用戶。個資用到最少，也能做情境推薦。</>,
                <>Partner data from Klook and KKday is hashed with <b>SHA-256</b> and matched in a data clean room, which only finds users both sides share. Personal data stays minimal, and moment-based offers still work.</>
              ),
            },
          ]}
        />
        <Prose className="mt-8">
          <p>
            {t(
              '後端用 Make.com 串流程，加上雲端伺服器和資料庫。MVP 每月營運成本只要幾千元，之後可以快速擴大。',
              'The back end runs on Make.com workflows plus a cloud server and database. The MVP costs only a few thousand NT dollars a month to run and can scale quickly.'
            )}
          </p>
        </Prose>
      </Section>

      <Section
        title={t('企劃書節錄', 'Pages from the plan')}
        aside={t('點圖片可以看大圖。', 'Click an image to view it full size.')}
      >
        <Gallery shots={shots} />
      </Section>

      <CaseFooter>
        <Button href={p.pdf}>{t('看完整企劃書 PDF', 'Read the full plan (PDF)')}</Button>
      </CaseFooter>
    </main>
  )
}
