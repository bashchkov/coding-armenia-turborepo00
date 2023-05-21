import type { ReactNode } from 'react'

import { dir } from 'i18next'

import { languages } from '@/i18n/settings'

import Footer from '@/ui/footer'
import Header from '@/ui/header'
import ScrollToTop from '@/ui/scroll-to-top'
import { ThemeProvider } from '@/ui/theme-providers'

import '@/styles/globals.css'

// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html suppressHydrationWarning lang={locale} dir={dir(locale)}>
      <head />
      <body className="dark:bg-black">
        <ThemeProvider>
          <Header locale={locale} />
          {children}
          {/* @ts-expect-error Server Component */}
          <Footer locale={locale} />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }))
}
