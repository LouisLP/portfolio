// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import en from '@/i18n/locales/en.ts'
import fr from '@/i18n/locales/fr.ts'
import de from '@/i18n/locales/de.ts'

enum SupportedLanguage {
  en = 'en',
  fr = 'fr',
  de = 'de',
}

const messages = { en, fr, de }

// Get browser language and check if supported
const getBrowserLocale = (): SupportedLanguage => {
  const navigatorLocale = navigator.language.split('-')[0]
  return navigatorLocale in messages ? (navigatorLocale as SupportedLanguage) : SupportedLanguage.en
}

export const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: SupportedLanguage.en,
  messages,
})
