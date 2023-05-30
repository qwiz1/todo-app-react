import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const Input = styled.input`
  font-size: ${FONTS.SIZES.M};
  outline: none;
  border: 2px solid ${COLORS.DARK};
  box-shadow: 3px 2px;
  padding: calc(${SPACES.S} / 3) ${SPACES.M};
  &:focus {
    box-shadow: none;
  }
`;

export { Input };
