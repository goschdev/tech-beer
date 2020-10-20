import pxToRem from 'logic/pxToRem';
import styled from 'styled-components';
import Wrapper from 'visual/styles/Wrapper';

export const Container = styled.header`
  padding: ${pxToRem(25)} 0;
`;

export const Content = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Logo = styled.img`
  max-height: ${pxToRem(155)};
`;
