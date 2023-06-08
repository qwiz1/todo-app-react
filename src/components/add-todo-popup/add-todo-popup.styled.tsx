import { Form } from 'formik';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export { StyledForm, SwitchContainer, ButtonContainer };
