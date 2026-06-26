import { ru } from './ru.js';
import { en } from './en.js';

export const locales = { ru, en };

export function getLocaleDictionary(localeCode) {
  return locales[localeCode] ?? locales.ru;
}
