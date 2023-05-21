'use client'

import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
} from 'react-i18next'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

import { getOptions } from '@/i18n/settings'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  })

export function useTranslationClient(
  lng: string,
  ns?: string | string[],
  options?: UseTranslationOptions,
) {
  if (i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng)
  }
  return useTranslationOrg(ns, options)
}
