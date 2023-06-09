import styled from 'styled-components';
import { SPACES } from 'src/theme';

const TodosMain = styled.main`
  padding: ${SPACES.M} 0;
`;

const TodosPrimaryContainer = styled.div`
  min-height: calc(100vh - 132px);
  display: flex;
  align-items: center;
`;

const TodoListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export { TodosMain, TodosPrimaryContainer, TodoListContainer };
