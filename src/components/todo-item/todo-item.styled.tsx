import styled from 'styled-components';
import { SPACES } from 'src/theme';
import { TodoDescription } from '../styled-components/todo-description';

const TodoItemWrapper = styled.section`
  margin-top: ${SPACES.M};
`;

const TodoDescriptionCard = styled(TodoDescription)`
  margin: 0;
  max-height: 118px;
  overflow: auto;
`;

export { TodoItemWrapper, TodoDescriptionCard };
