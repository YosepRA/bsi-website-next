import React from 'react';
import { usePathname, useParams } from 'next/navigation';
import Nav from 'react-bootstrap/Nav';

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
    <>
      {locales.map((locale) => {
        const { shortText } = getItemText(locale);

        return <Nav.Link href={langPath(locale)}>{shortText}</Nav.Link>;
      })}
    </>
  );
};

export default LangSwitch;
