import { COLORS } from 'src/theme';
import styled from 'styled-components';

const Textarea = styled.textarea`
  outline: none;
  border-radius: none;
  border: 2px solid ${COLORS.DARK};
  box-shadow: 3px 2px;
  &:focus {
    box-shadow: none;
  }
`;

export { Textarea };
