// src/i18n/index.ts
import { createI18n } from 'vue-i18n'

import de from '@/i18n/locales/de.ts'
import en from '@/i18n/locales/en.ts'
import fr from '@/i18n/locales/fr.ts'

const messages = { en, fr, de }

export enum SupportedLanguage {
  en = 'en',
  fr = 'fr',
  de = 'de',
}

export const switchLanguage = (lang: SupportedLanguage) => {
  i18n.global.locale.value = lang
  document.querySelector('html')?.setAttribute('lang', lang)
  console.info(`Switched to "${lang}" language`)
}

// const getBrowserLocale = (): SupportedLanguage => {
//   const navigatorLocale = navigator.language.split('-')[0]
//   return navigatorLocale in messages ? (navigatorLocale as SupportedLanguage) : SupportedLanguage.en
// }

export const i18n = createI18n({
  legacy: false,
  locale: SupportedLanguage.en,
  fallbackLocale: SupportedLanguage.en,
  messages,
})
