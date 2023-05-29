import { COLORS, FONTS, SPACES } from 'src/theme';
import styled from 'styled-components';

const SmallButton = styled.button`
  text-transform: uppercase;
  background: ${COLORS.light};
  border: 2px solid ${COLORS.dark};
  box-shadow: 3px 2px;
  padding: calc(${SPACES.s} / 2) ${SPACES.m};
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: ${COLORS.primary};
  }
`;

const MediumButton = styled(SmallButton)`
  font-size: ${FONTS.SIZES.m};
  padding: calc(${SPACES.s} / 1.2) ${SPACES.m};
`;

const LargeButton = styled(SmallButton)`
  font-size: ${FONTS.SIZES.l};
  padding: ${SPACES.s} ${SPACES.m};
`;

export { SmallButton, MediumButton, LargeButton };
