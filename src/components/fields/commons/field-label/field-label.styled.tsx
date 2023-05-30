import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const FieldLabel = styled.label`
  margin-bottom: ${SPACES.S};
  color: ${COLORS.GRAY};
  font-weight: ${FONTS.WEIGHTS.MEDIUM};
  font-size: ${FONTS.SIZES.M};
`;

export { FieldLabel };
