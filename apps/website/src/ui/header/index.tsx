'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { useTranslationClient } from '@/i18n/client'

import Logo from '@/ui/logo'

const Header = ({ locale }: { locale: string }) => {
  const { t } = useTranslationClient(locale)

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 12)
    }
    window.addEventListener('scroll', handleStickyNavbar)
    return () => window.removeEventListener('scroll', handleStickyNavbar)
  })

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
            : 'absolute'
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full ${sticky ? 'py-5' : 'py-8'} `}>
                <Logo />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <Link
                href={`/${locale}/sign-in`}
                className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
              >
                {t('header.sign_in')}
              </Link>
              <Link
                href={`/${locale}/sign-up`}
                className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
              >
                {t('header.sign_up')}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
