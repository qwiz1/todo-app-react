import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const SmallButton = styled.button`
  text-transform: uppercase;
  background: ${COLORS.LIGHT};
  border: 2px solid ${COLORS.DARK};
  box-shadow: 3px 2px;
  padding: calc(${SPACES.S} / 2) ${SPACES.M};
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: ${COLORS.BLUE};
  }
`;

const MediumButton = styled(SmallButton)`
  font-size: ${FONTS.SIZES.M};
  padding: calc(${SPACES.S} / 1.2) ${SPACES.M};
`;

const LargeButton = styled(SmallButton)`
  font-size: ${FONTS.SIZES.L};
  padding: ${SPACES.S} ${SPACES.M};
`;

export { SmallButton, MediumButton, LargeButton };
