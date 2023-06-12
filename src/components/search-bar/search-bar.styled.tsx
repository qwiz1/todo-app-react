import styled from 'styled-components';
import { COLORS, SPACES } from 'src/theme';

const SearchWrapper = styled.div`
  width: 200px;
  position: relative;
  margin: 0 0 ${SPACES.S} 0;
`;

const SearchField = styled.input`
  outline: none;
  width: 100%;
  padding: 0 30px;
  height: 30px;
  border: 2px solid ${COLORS.DARK};
  border-radius: 0;
  box-shadow: 3px 2px;
  &:focus {
    box-shadow: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
`;
export { SearchWrapper, SearchField, SearchButton };
