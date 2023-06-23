import React from 'react';
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';

import type {
  LangItemData,
  LangSwitchTitleProps,
} from 'types/main-navbar.d.ts';
import englishFlag from 'assets/img/en-lang-flag.png';
import indonesianFlag from 'assets/img/id-lang-flag.png';
import locales from 'data/locales.ts';

import * as Styled from './styled/MainNavbar.styled.ts';

function getItemText(locale: string): LangItemData {
  let shortText = '';
  let longText = '';
  let flagUrl;

  switch (locale) {
    case 'en':
      shortText = 'EN';
      longText = 'English';
      flagUrl = englishFlag;
      break;

    case 'id':
      shortText = 'ID';
      longText = 'Indonesian';
      flagUrl = indonesianFlag;
      break;

    default:
      shortText = 'EN';
      longText = 'English';
      flagUrl = englishFlag;
      break;
  }

  return {
    shortText,
    longText,
    flagUrl,
  };
}

const LangSwitchTitle = function LangSwitchTitleComponent({
  data,
}: LangSwitchTitleProps) {
  return (
    <Styled.LangSwitchTitle className="main-navbar__lang-switch__title">
      <span className="main-navbar__lang-switch__title-flag">
        <Image src={data.flagUrl} alt={`${data.longText} flag}`} />
      </span>
      <span className="main-navbar__lang-switch__title-name">
        {data.shortText.toLowerCase()}
      </span>
    </Styled.LangSwitchTitle>
  );
};

const LangSwitch = function LangSwitchComponent() {
  const pathname = usePathname();
  const { lang } = useParams();

  const langPath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  const activeLang = getItemText(lang);

  return (
    <Styled.LangSwitch
      title={<LangSwitchTitle data={activeLang} />}
      id="lang-switch"
      className="main-navbar__lang-switch"
    >
      {locales.map((locale) => {
        const { longText } = getItemText(locale);

        return (
          <NavDropdown.Item
            key={locale}
            href={langPath(locale)}
            className="main-navbar__lang-switch__item"
          >
            {longText}
          </NavDropdown.Item>
        );
      })}
    </Styled.LangSwitch>
  );
};

export default LangSwitch;
