import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: ${COLORS.ERROR};
  font-size: ${FONTS.SIZES.SM};
  margin-top: calc(${SPACES.S} / 1.5);
`;

export { ErrorMessage };
