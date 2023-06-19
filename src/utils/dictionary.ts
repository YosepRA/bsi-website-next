import 'server-only';

import type { Dictionary } from 'types/dictionary';

interface DictionaryImportType {
  en: () => Promise<Dictionary>;
  id: () => Promise<Dictionary>;
}

const dictionaries = {
  en: () =>
    import('data/dictionaries/en.json').then((module) => module.default),
  id: () =>
    import('data/dictionaries/id.json').then((module) => module.default),
};

async function getDictionary(locale: string): Promise<Dictionary> {
  // Return default English dictionary for static files access (favicon.ico, etc).
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.en();
  }

  return dictionaries[locale as keyof DictionaryImportType]();
}

export default getDictionary;
