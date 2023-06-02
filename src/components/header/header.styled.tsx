import { SPACES } from 'src/theme';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: ${SPACES.M} 0;
`;

const Navigation = styled.nav`
  max-width: 90%;
  margin: 0 auto;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
`;

export { StyledHeader, Navigation, NavigationList };
