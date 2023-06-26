import styled from 'styled-components';
import { COLORS, SPACES } from 'src/theme';
import { SIZES } from 'src/theme/fonts.const';

const TodoCard = styled.div`
  padding: ${SPACES.S} ${SPACES.S} 0;
  margin: ${SPACES.ML} auto;
  max-width: 380px;
  height: 260px;
  border: 4px solid ${COLORS.DARK};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardContent = styled.div`
  padding: ${SPACES.S};
  overflow-y: auto;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  margin-top: 0;
  font-size: ${SIZES.L};
  font-weight: 500;
`;

const CardDescription = styled.p<{ done: boolean }>`
  margin: 0;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

const CardActions = styled.div`
  padding: calc(${SPACES.S} / 2) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: ${SPACES.S};
`;

export {
  TodoCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardActions,
  BtnWrapper,
};
