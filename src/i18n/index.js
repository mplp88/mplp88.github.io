import es from './es'
import en from './en'

const resources = {
  es,
  en
}

export const getTranslation = (lang, key) => {
  return key.split('.').reduce((obj, part) => obj?.[part], resources[lang])
}
