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
      caption: t('第一年獲客漏斗的預估：5 萬名 LINE 好友，轉成 1,000 位訂閱會員', 'Projected year-one funnel: 50,000 LINE friends to 1,000 subscribers'),
    },
    {
      src: '/bnp/economics.png',
      caption: t('經濟模型的預估：單位經濟、CAC 回收、三種情境測試', 'Projected economics: unit economics, CAC payback and three scenarios'),
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

      <Section title={t('重點摘要', 'Summary')}>
        <Items
          cols={3}
          items={[
            {
              title: t('關鍵問題', 'Key question'),
              body: t(
                '年輕人願意買保險，卻嫌保費太貴。壽險公司要怎麼用低門檻的方式接觸他們？',
                'Young adults are willing to buy insurance but find it too expensive. How can a life insurer reach them with a low entry price?'
              ),
            },
            {
              title: t('我的分析', 'My analysis'),
              body: t(
                '我把年繳保單改成每月 199 元的訂閱來試算。在企劃的假設下，每位會員每月貢獻約 188 元，留超過 3 個月就能回收獲客成本。就算沒有人轉買壽險，模型也成立。',
                'I modelled the yearly policy as a NT$199 monthly subscription. Under the plan’s assumptions, each member contributes about NT$188 a month and pays back acquisition cost after 3 months. The model holds even if nobody moves on to life insurance.'
              ),
            },
            {
              title: t('建議與結果', 'Recommendation and result'),
              body: t(
                '先用 LINE 上的低價意外險訂閱圈住客群，再轉向壽險。企劃拿到第三屆 Cardif InsurHack 第二名（銀獎）。這是比賽企劃，頁面上的數字都是企劃中的預估。',
                'Start with a low-price accident-cover subscription on LINE, then move members to life insurance. The plan won 2nd place (Silver) at the 3rd Cardif InsurHack. This was a competition proposal, so every figure on this page is a projection in the plan.'
              ),
            },
          ]}
        />
      </Section>

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
              <>但 18 到 29 歲的人，<b>82.2%</b> 願意再買保險。卡住他們的是預算，他們覺得保費太貴。</>,
              <>Yet <b>82.2%</b> of people aged 18 to 29 are willing to buy more cover. What stops them is budget. Premiums feel too high.</>
            )}
          </p>
        </Prose>
        <div className="mt-6">
          <Note>
            <p>
              {t(
                '出處：壽險投保率 70.9% 和每人 2.6 張保單，見企劃書第 2–3 頁，原始來源是保險事業發展中心 2024 年的統計。',
                'Sources: 70.9% life insurance coverage and 2.6 policies per person are on pages 2–3 of the plan, originally from the Taiwan Insurance Institute’s 2024 statistics.'
              )}
            </p>
            <p className="mt-1">
              {t(
                '82.2% 是 18 到 29 歲的再次投保意願，見企劃書第 2 頁，原始來源是《現代保險》2025 年的調查。',
                '82.2% is the share of 18 to 29-year-olds willing to buy cover again, on page 2 of the plan, originally from a 2025 survey by Modern Insurance (現代保險) magazine.'
              )}
            </p>
          </Note>
        </div>
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

      <Section
        title={t('財務模型：企劃中的預估', 'Financial model: projections in the plan')}
        aside={t('以下都是企劃書裡的預估，不是實際營運的結果。', 'Everything below is a projection from the plan, not an operating result.')}
      >
        <Items
          items={[
            {
              title: t('單位經濟', 'Unit economics'),
              body: t(
                <>月費 199 元，扣掉每人每月變動成本 11 元，<b>每位會員每月貢獻約 188 元</b>。在這個假設下，每一位訂閱會員都是正貢獻，訂閱本身不虧錢。</>,
                <>A NT$199 monthly fee minus NT$11 in variable cost per member per month leaves <b>about NT$188 per member per month</b>. On these assumptions, every subscriber contributes positively, so the subscription itself does not lose money.</>
              ),
            },
            {
              title: t('獲客成本回收', 'CAC payback'),
              body: t(
                <>每位會員的獲客成本抓 200 到 500 元。會員留超過 <b>3 個月</b>就能回收。企劃預估第一年有 1,000 位會員，年經常性收入約 <b>240 萬元</b>，也就是 1,000 人 × 199 元 × 12 個月。</>,
                <>Acquisition cost is assumed at NT$200 to 500 per member. A member who stays <b>3 months</b> pays that back. The plan projects 1,000 members in year one, or about <b>NT$2.4 million</b> in annual recurring revenue (1,000 × NT$199 × 12 months).</>
              ),
            },
          ]}
        />
        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">{t('三種情境的壓力測試', 'Stress test across three scenarios')}</h3>
          <div className="mt-4">
            <List
              items={[
                t(
                  <><b>保守</b>：獲客成本 500 元，會員留 3 個月，每人累積貢獻 564 元。仍能回收獲客成本，不虧損。</>,
                  <><b>Conservative</b>: NT$500 acquisition cost and 3 months’ retention give NT$564 contribution per member. Acquisition cost is still recovered, so no loss.</>
                ),
                t(
                  <><b>基準</b>：獲客成本 300 元，會員留 6 個月，每人累積貢獻 1,128 元。回收快，現金流健康。</>,
                  <><b>Base</b>: NT$300 acquisition cost and 6 months’ retention give NT$1,128 per member. Fast payback and healthy cash flow.</>
                ),
                t(
                  <><b>樂觀</b>：獲客成本 200 元，會員留 12 個月，每人累積貢獻 2,256 元。LTV 高。</>,
                  <><b>Optimistic</b>: NT$200 acquisition cost and 12 months’ retention give NT$2,256 per member. High LTV.</>
                ),
              ]}
            />
          </div>
        </div>
        <div className="mt-8">
          <Note>
            {t(
              '在企劃的假設下，就算不算壽險轉換，模型也成立。另外設了三道防線，分別是自動化抵銷成本、防止逆選擇，以及退訂的財務門檻。',
              'On the plan’s assumptions, the model holds even without any life-insurance conversion. Three safeguards back it up. Automation offsets cost, a guard blocks adverse selection, and a financial threshold applies to cancellations.'
            )}
          </Note>
        </div>
        <div className="mt-4">
          <Note title={t('數字出處', 'Where the numbers come from')}>
            <p>
              {t(
                '月費 199 元、變動成本 11 元、每月貢獻 188 元、獲客成本 200 到 500 元和三種情境，見企劃書第 25 頁。這些是企劃書內的估計，沒有外部來源。',
                'The NT$199 fee, NT$11 variable cost, NT$188 monthly contribution, NT$200–500 acquisition cost and the three scenarios are on page 25 of the plan. They are estimates in the proposal, with no outside source.'
              )}
            </p>
            <p className="mt-1">
              {t(
                '第一年 1,000 位會員和 240 萬元年經常性收入，見企劃書第 25–26 頁，也是企劃書內的估計。',
                'The 1,000 year-one members and NT$2.4 million in annual recurring revenue are on pages 25–26. They are also estimates in the proposal.'
              )}
            </p>
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
                <>資料來自提案中的合作對象，例如 Klook、KKday。這些資料先用 <b>SHA-256</b> 雜湊，再放進 Data Clean Room，只比對雙方共同的用戶。個資用到最少，也能做情境推薦。企劃書附錄一（第 31 頁）對照了這兩家平台的隱私權條款，評估這樣做的授權是否可行。</>,
                <>Data from proposed partners such as Klook and KKday would be hashed with <b>SHA-256</b> and matched in a data clean room, which only finds users both sides share. Personal data stays minimal, and moment-based offers still work. Appendix 1 of the plan (page 31) checks both platforms’ privacy terms to see whether this use is permitted.</>
              ),
            },
          ]}
        />
        <Prose className="mt-8">
          <p>
            {t(
              '後端用 Make.com 串流程，加上雲端伺服器和資料庫。企劃估計 MVP 每月營運成本約 2,000 到 7,000 元，不含人力（企劃書第 23 頁的成本估計表）。之後可以快速擴大。',
              'The back end runs on Make.com workflows plus a cloud server and database. The plan estimates MVP running costs at about NT$2,000 to 7,000 a month, excluding staff (cost table, page 23 of the plan). It can scale quickly from there.'
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
