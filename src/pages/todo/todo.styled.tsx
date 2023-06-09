import { SPACES } from 'src/theme';
import styled from 'styled-components';

 const TodoMain = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACES.L} 0;
`;

const TodoContainer = styled.div`
  height: calc(100vh - 60px - ${SPACES.L} - ${SPACES.L});
  max-width: 640px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.S};
`;

const SwitchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.S};
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  TodoMain,
  TodoContainer,
  DescriptionContainer,
  SwitchesContainer,
  SwitchContainer,
  ButtonGroup,
};
