import pxToRem from 'logic/pxToRem';
import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

type ItemProps = {
  primary?: boolean;
};

export const Item = styled.a<ItemProps>`
  color: ${COLORS.whitePure};
  font-size: ${pxToRem(24)};
  margin-left: ${pxToRem(30)};
  text-decoration: none;

  ${(p) =>
    p.primary &&
    css`
      text-transform: uppercase;
      padding: ${pxToRem(20)};
      box-shadow: 0px ${pxToRem(3)} ${pxToRem(6)} ${COLORS.blackPure};
      background: transparent
        linear-gradient(109deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)
        0% 0% no-repeat padding-box;
    `}

  ${(p) =>
    !p.primary &&
    css`
      &:after {
        content: '';
        height: ${pxToRem(2)};
        margin-top: ${pxToRem(3)};
        background-color: transparent;
        display: block;
      }
      &:hover {
        &:after {
          background-color: ${COLORS.secondary};
        }
      }
    `}
`;
