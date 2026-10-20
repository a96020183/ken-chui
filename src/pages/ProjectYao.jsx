import React from 'react'
import { useT, useTitle } from '../i18n.jsx'
import { projects } from '../data/profile.js'
import { Button, CaseHeader, Section, Prose, Roles, Items, Frame, Gallery, CaseFooter } from '../components/ui.jsx'

const p = projects.find((x) => x.slug === 'yaoguang-whale')

// 把 Figma proto 連結轉成可內嵌、可直接點擊操作的 embed 版本
const figmaEmbed = p.figma
  ? p.figma.replace('www.figma.com', 'embed.figma.com') + '&embed-host=share'
  : null

export default function ProjectYao() {
  const t = useT()
  useTitle('瑤光深鯨 · 徐浩華', 'Yaoguang · Ken Chui')

  const shots = [
    { src: '/yao/cover.png', caption: t('封面：不改硬體、跨場域的無障礙操作系統。', 'Cover: an accessibility layer that works across kiosks without hardware changes.') },
    { src: '/yao/problem.png', caption: t('問題：現有的無障礙做法，跟不上觸控化的速度。', 'Problem: existing accessibility fixes can\'t keep up with the move to touchscreens.') },
    { src: '/yao/concept.png', caption: t('解法：不是一個 App，而是夾在手機和機台之間的無障礙操作層。', 'Solution: not another app, but an accessibility layer between the phone and the kiosk.') },
    { src: '/yao/system.png', caption: t('系統設計：用 NFC 和 BLE 把機台操作轉到手機上，機台不用改硬體。', 'System design: NFC and BLE move kiosk operation onto the phone, with no hardware change.') },
  ]

  return (
    <main>
      <CaseHeader
        result={t(p.result)}
        period={t(p.period)}
        title={t(p.title)}
        org={t(p.org)}
        event={t('2 人團隊', 'Team of 2')}
        summary={t(
          '觸控機台越來越多，視障者卻越來越難用。這場競賽不限題目，我提出的方向是不換機台硬體，讓視障者用自己的手機操作。這是 TapAble 最早的版本，當時只有簡報和可以點的 Figma 原型。',
          'Touchscreen kiosks keep spreading, and blind people are left further behind. The competition had an open brief. My idea was to let blind users operate kiosks from their own phones without replacing any hardware. This is the earliest version of TapAble: a pitch and a clickable Figma prototype.'
        )}
        actions={p.figma && <Button primary href={p.figma}>{t('開啟 Figma 原型', 'Open Figma prototype')}</Button>}
        facts={[
          { label: t('題目', 'Idea'), value: t('我原創', 'My own') },
          { label: t('團隊', 'Team'), value: t('2 人', '2 people') },
          { label: t('成品', 'Output'), value: t('簡報與 Figma 原型', 'Pitch + Figma prototype') },
          { label: t('機台硬體改動', 'Kiosk hardware changes'), value: t('零', 'None') },
        ]}
      />

      <Section title={t('我的角色', 'My role')}>
        <Roles
          mine={t(
            <>題目由我原創。我負責<b>系統設計、商業模式、財務規劃、技術可行性</b>，以及 Figma 互動原型。</>,
            <>The idea was mine. I owned the <b>system design, business model, financial plan and technical feasibility</b>, and built the Figma prototype.</>
          )}
          team={t('隊友林亭汝負責簡報製作和現場報告。', 'My teammate built the slides and gave the presentation.')}
        />
      </Section>

      <Section title={t('要解決的問題', 'The problem')}>
        <Prose className="mb-10">
          <p>
            {t(
              <>ATM、醫院批價機、自助點餐機都改成觸控。效率提高了，卻把<b>全台約 5.4 萬名視障者</b>擋在外面，其中重度以上約 2.25 萬人。</>,
              <>ATMs, hospital payment kiosks and self-order machines have all gone touchscreen. They got faster, and shut out <b>about 54,000 blind and low-vision people</b> in Taiwan, about 22,500 of them severe.</>
            )}
          </p>
        </Prose>
        <Items
          cols={3}
          items={[
            {
              title: t('操作被切斷', 'The flow breaks'),
              body: t('摸得到密碼鍵盤，卻在平滑的螢幕上找不到「提款」和「確認」。', 'You can feel the PIN pad, but can\'t find "withdraw" or "confirm" on a flat screen.'),
            },
            {
              title: t('隱私被拿走', 'Privacy is lost'),
              body: t('只好把金融卡交給旁人、在公開場合唸出密碼，或讓別人聽到自己的病歷。', 'People end up handing their bank card to a stranger, saying their PIN out loud, or having others hear their medical details.'),
            },
            {
              title: t('舊方法過時', 'Old fixes are outdated'),
              body: t('耳機孔和點字鍵盤跟不上觸控化。手機早就沒有 3.5mm 耳機孔，改硬體合規動輒上億。', 'Headphone jacks and braille keypads can\'t keep up. Phones dropped the 3.5mm jack long ago, and hardware retrofits for compliance can run past NT$100 million.'),
            },
          ]}
        />
      </Section>

      <Section title={t('提出的解法', 'The proposal')} aside={t('不換機台，讓手機成為操作入口。', 'Keep the kiosk. Make the phone the way in.')}>
        <Items
          items={[
            {
              title: t('不動機台本身', 'Leave the kiosk alone'),
              body: t(
                '不動主機板、螢幕和核心設備。只加上幾十到幾百元的 NFC 貼紙和 BLE Beacon，把機台操作轉到手機上，變成語音和滑動。',
                'No change to the board, screen or core hardware. Add an NFC sticker and a BLE beacon costing tens to hundreds of NT dollars, and the kiosk\'s steps move onto the phone as voice and swipes.'
              ),
            },
            {
              title: t('不用學新東西', 'Nothing new to learn'),
              body: t(
                '摸到 NFC 貼紙就定位，和找耳機孔的習慣一樣。靠近 BLE Beacon 會自動感應。操作沿用手機內建 VoiceOver 和 TalkBack 的滑動方式。',
                'Touching the NFC sticker locates the kiosk, just like feeling for a headphone jack. A BLE beacon senses you as you approach. Gestures are the same VoiceOver and TalkBack swipes users already know.'
              ),
            },
            {
              title: t('四個步驟', 'Four steps'),
              body: t(
                '靠近定位，手機震動並出聲，螢幕變黑防偷看，再用單指滑動切換、點兩下確認。',
                'Approach to locate. The phone vibrates and speaks. The screen goes dark against prying eyes. Swipe with one finger to move, double-tap to confirm.'
              ),
            },
            {
              title: t('隱私與安全', 'Privacy and security'),
              body: t(
                '螢幕變黑或加上高對比遮罩，語音只進使用者自己的藍牙耳機。交易確認沿用銀行既有的無卡提款機制，也會確認使用者真的站在機台前。實施細節不公開。',
                'The screen goes dark or uses a high-contrast mask, and audio goes only to the user\'s own Bluetooth earphones. Transactions reuse the bank\'s existing cardless-withdrawal checks and confirm the user is really at the kiosk. Implementation details are not public.'
              ),
            },
          ]}
        />
      </Section>

      {figmaEmbed && (
        <Section
          title={t('互動原型', 'Interactive prototype')}
          aside={t('這是當時的 Figma 原型，可以直接在頁面上點。', 'The Figma prototype from the competition. You can click through it right here.')}
        >
          <Frame
            src={figmaEmbed}
            title={t('瑤光深鯨 · Figma 互動原型', 'Yaoguang · Figma prototype')}
            height="h-[70vh] min-h-[520px]"
            openHref={p.figma}
            openLabel={t('在 Figma 全螢幕開啟', 'Open full screen in Figma')}
          />
        </Section>
      )}

      <Section title={t('誰付費，誰受益', 'Who pays, who benefits')}>
        <Items
          items={[
            {
              title: t('視障者免費', 'Free for blind users'),
              body: t(
                '由銀行、醫學中心和大眾運輸付費。動輒上億的硬體改裝，換成每年可控的軟體訂閱。',
                'Banks, medical centres and transit operators pay. A hardware retrofit that can cost over NT$100 million becomes a predictable yearly software subscription.'
              ),
            },
            {
              title: t('依場域交付', 'Delivered to fit the setting'),
              body: t(
                '金融場域做成 SDK，放進銀行原本的 App。醫療和零售場域用免下載的輕量網頁。',
                'For banks, an SDK inside the bank\'s existing app. For hospitals and retail, a lightweight web page with nothing to download.'
              ),
            },
            {
              title: t('對使用者', 'For users'),
              body: t('把財務、醫療和公共服務的自主和隱私拿回來，自己完成日常交易。', 'Independence and privacy back for banking, healthcare and public services, so daily tasks can be done alone.'),
            },
            {
              title: t('對企業', 'For businesses'),
              body: t(
                '用去識別化的任務完成率，產出可追蹤的 ESG 和普惠金融成果，對應金管會的友善服務評鑑。',
                'De-identified task completion rates give trackable ESG and financial-inclusion results that map to the regulator\'s accessible-service review.'
              ),
            },
          ]}
        />
      </Section>

      <Section title={t('提案畫面', 'From the pitch')} aside={t('只放功能層次的頁面，完整簡報不公開。', 'Feature-level slides only. The full deck is not public.')}>
        <Gallery shots={shots} />
      </Section>

      <Section title={t('後來怎麼了', 'What happened next')}>
        <Prose>
          <p>
            {t(
              <>瑤光深鯨是起點。題目後來改名 <b>TapAble</b>，Tap 一下，就 Able。</>,
              <>Yaoguang was the start. The idea was later renamed <b>TapAble</b>: tap once, and you're able.</>
            )}
          </p>
          <p>
            {t(
              <>同年 9 月，它在 BUILDMODE 黑客松第一次寫成能跑的程式，<b>160 隊拿下第二名</b>。同一個題目也拿到 3S 創客競賽入圍獎、台灣尤努斯創新獎入圍決賽（233 組取 10）、LINE AI 創新創業競賽第三名，也進了 AIDA 決賽。</>,
              <>That September it became working code for the first time at the BUILDMODE Hackathon and <b>placed 2nd of 160 teams</b>. It also won a finalist award at the 3S Maker Competition, reached the Taiwan Yunus Innovation Award final (top 10 of 233), took 3rd at the LINE AI Innovation & Entrepreneurship Competition, and reached the AIDA final.</>
            )}
          </p>
        </Prose>
        <div className="no-print mt-8">
          <Button to="/projects/tapable-buildmode">{t('看 TapAble 黑客松版', 'See the TapAble hackathon build')}</Button>
        </div>
      </Section>

      <CaseFooter>
        {p.figma && <Button href={p.figma}>{t('Figma 原型', 'Figma prototype')}</Button>}
      </CaseFooter>
    </main>
  )
}
