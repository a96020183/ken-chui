import React from 'react'
import { Container, Button } from '../components/ui.jsx'
import { useT, useTitle } from '../i18n.jsx'

export default function NotFound() {
  const t = useT()
  useTitle('找不到這一頁 · 徐浩華', 'Page not found · Ken Chui')
  return (
    <main>
      <Container className="py-24 sm:py-32">
        <h1 className="text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">{t('找不到這一頁', 'This page does not exist')}</h1>
        <p className="mt-4 max-w-prose text-[16px] leading-[1.7] text-ink2">
          {t('網址可能打錯了，或這一頁已經移走。', 'The link may be mistyped, or the page has moved.')}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button primary to="/">{t('回首頁', 'Go to home')}</Button>
          <Button to="/cv">{t('看履歷', 'View CV')}</Button>
        </div>
      </Container>
    </main>
  )
}
