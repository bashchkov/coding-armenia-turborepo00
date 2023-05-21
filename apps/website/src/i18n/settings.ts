export const fallbackLng: string = 'en'
export const languages: string[] = [fallbackLng, 'hy', 'ru']
export const defaultNS: string | string[] = 'translation'

export const getOptions = (lng: string = fallbackLng, ns: string | string[] = defaultNS) => ({
  // debug: true,
  supportedLngs: languages,
  // preload: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
})
