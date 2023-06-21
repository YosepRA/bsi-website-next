import React from 'react';
import { usePathname, useParams } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';

import locales from 'data/locales.ts';

function getItemText(locale: string) {
  let shortText = '';
  let longText = '';

  switch (locale) {
    case 'en':
      shortText = 'EN';
      longText = 'English';
      break;

    case 'id':
      shortText = 'ID';
      longText = 'Indonesian';
      break;

    default:
      shortText = 'EN';
      longText = 'English';
      break;
  }

  return {
    shortText,
    longText,
  };
}

const LangSwitch = function LangSwitchComponent() {
  const pathname = usePathname();
  const { lang } = useParams();

  const langPath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <NavDropdown title={lang} id="lang-switch">
      {locales.map((locale) => {
        const { longText } = getItemText(locale);

        return (
          <NavDropdown.Item key={locale} href={langPath(locale)}>
            {longText}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default LangSwitch;
