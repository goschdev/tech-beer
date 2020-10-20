import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

export const Menu = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Item href="#">{t('menu.home')}</S.Item>
      <S.Item href="#">{t('menu.talks')}</S.Item>
      <S.Item href="#">{t('menu.managers')}</S.Item>
      <S.Item href="#">{t('menu.support')}</S.Item>
      <S.Item href="#" primary>
        {t('menu.subscribe')}
      </S.Item>
    </S.Container>
  );
};

export default Menu;
