import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const SmallButton = styled.button`
  font-size: ${FONTS.SIZES.S};
  text-transform: uppercase;
  background: ${COLORS.LIGHT};
  border: 2px solid ${COLORS.DARK};
  box-shadow: 3px 2px;
  padding: calc(${SPACES.S} / 2) ${SPACES.S};
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: ${COLORS.BLUE};
  }
`;

const MediumButton = styled(SmallButton)`
  font-size: ${FONTS.SIZES.SM};
  padding: calc(${SPACES.S} / 1.5) ${SPACES.SM};
`;

const LargeButton = styled(MediumButton)`
  font-size: ${FONTS.SIZES.M};
  padding: ${SPACES.S} ${SPACES.M};
`;

export { SmallButton, MediumButton, LargeButton };
