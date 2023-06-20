'use client';

import React, { createContext } from 'react';

import type { Dictionary } from 'types/dictionary.d.ts';
import englishDictionary from 'data/dictionaries/en.json';

const DictionaryContext = createContext<Dictionary>(englishDictionary);

const DictionaryProvider = function DictionaryProviderComponent({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: Dictionary;
}) {
  return (
    <DictionaryContext.Provider value={dict}>
      {children}
    </DictionaryContext.Provider>
  );
};

export { DictionaryProvider };

export default DictionaryContext;
