import styled from 'styled-components';
import { SmallButton } from '../styled-components/button';
import { COLORS, SPACES } from 'src/theme';

const ModalContainer = styled.div`
  background: ${COLORS.LIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACES.M};
  position: relative;
  border: 2px solid black;
  box-shadow: 3px 2px;
  padding: ${SPACES.M} ${SPACES.M};
  min-width: 288px;
  max-width: 425px;
  width: 90vw;
  padding: ${SPACES.M} ${SPACES.M};
`;

const Title = styled.h2`
  margin: ${SPACES.M} 0 ${SPACES.M};
  text-align: center;
`;

const Overlay = styled.div`
  z-index: 100;
  background-color: ${COLORS.OVERLAY};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled(SmallButton)`
  width: 26px;
  height: 26px;
  padding: 1px;
  position: absolute;
  top: ${SPACES.M};
  right: ${SPACES.M};
`;

export { ModalContainer, Title, Overlay, CloseButton };
