import styled from 'styled-components';

const ControlsContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row-reverse')};
  justify-content: ${(props) => (!props.isMobile ? 'space-between' : '')};
  max-width: 690px;
  width: 90%;
  margin: 0 auto;
`;

export { ControlsContainer };
