import React from 'react';
import { useTranslation } from 'react-i18next';

import logoSVG from 'assets/img/logo-white.svg';
import Menu from './Menu';
import * as S from './styles';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>{t('title')}</S.Title>
        <S.Logo src={logoSVG} alt={t('logo-alt')} />
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Header;
