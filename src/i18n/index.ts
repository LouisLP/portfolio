import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    education: {
      title: 'Education',
      program: 'Program',
      school: 'School',
    },
  },
  de: {
    education: {
      title: 'Bildung',
      program: 'Studiengang',
      school: 'Universität',
    },
  },
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
