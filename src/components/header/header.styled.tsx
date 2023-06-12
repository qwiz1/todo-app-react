import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  width: 90%;
  max-width: 1024px;
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
