import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const Input = styled.input`
  font-size: ${FONTS.SIZES.m};
  outline: none;
  border: 2px solid ${COLORS.dark};
  box-shadow: 3px 2px;
  padding: calc(${SPACES.s} / 3) ${SPACES.m};
  &:focus {
    box-shadow: none;
  }
`;

export { Input };
