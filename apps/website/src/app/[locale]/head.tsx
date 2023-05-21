import { useTranslationServer } from '@/i18n/server'

export default async function Head({
  params,
}: {
  params: {
    locale: string
  }
}) {
  const { t } = await useTranslationServer(params.locale)

  return (
    <>
      <title>{t('app.name')}</title>
      <meta name="description" content={t('app.description')} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#090e34" />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
