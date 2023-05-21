import Link from 'next/link'

import { useTranslationServer } from '@/i18n/server'

import GoogleIcon from '@/ui/icons/google'

export default async function SignInPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslationServer(locale, 'auth')
  return (
    <>
      <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
        {t('sign_in_title')}
      </h3>
      <p className="mb-11 text-center text-base font-medium text-body-color">
        {t('sign_in_subtitle')}
      </p>
      <button className="mb-6 flex w-full items-center justify-center rounded-md bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#242B51] dark:text-body-color dark:shadow-signUp dark:hover:text-white">
        <GoogleIcon className="mr-3" />
        {t('sign_in_with', { name: 'Google' })}
      </button>
      <div className="mb-8 flex items-center justify-center">
        <span className="hidden h-[1px] w-full bg-body-color sm:block"></span>
        <div className="w-full px-5 text-center text-base font-medium text-body-color">
          {t('or')}
        </div>
        <span className="hidden h-[1px] w-full bg-body-color sm:block"></span>
      </div>
      <form>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            {t('your_email')}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t('enter_your_email') ?? ''}
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            {t('your_password')}
          </label>
          <input
            type="password"
            name="password"
            placeholder={t('enter_your_password') ?? ''}
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="mb-4 sm:mb-0">
            <label
              htmlFor="checkboxLabel"
              className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
            >
              <div className="relative">
                <input type="checkbox" id="checkboxLabel" className="sr-only" />
                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {t('remember_me')}
            </label>
          </div>
          <div>
            <Link
              href={`/${locale}/forgot-password`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {t('forgot_Password')}
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            {t('sign_in_btn')}
          </button>
        </div>
      </form>
      <p className="text-center text-base font-medium text-body-color">
        {t('do_not_you_have_an_account')}{' '}
        <Link href={`/${locale}/sign-up`} className="text-primary hover:underline">
          {t('sign_up_btn')}
        </Link>
      </p>
    </>
  )
}
