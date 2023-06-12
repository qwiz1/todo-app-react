import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsGroup = styled.div`
  display: flex;
  height: 27px;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export { ControlsContainer, ButtonsGroup, StyledLink };
