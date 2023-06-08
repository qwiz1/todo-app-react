import styled from 'styled-components';

const TodoDescription = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${(props) =>
    props.isCompleted ? 'line-through' : 'none'};
`;

export { TodoDescription };
