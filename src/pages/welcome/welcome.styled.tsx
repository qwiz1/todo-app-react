import { LargeButton } from 'src/components/styled-components/button';
import { FONTS } from 'src/theme';
import styled from 'styled-components';

const WelcomeMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 300px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WelcomeTitle = styled.h2`
  margin: 0;
  font-size: ${FONTS.SIZES.XL};
  text-align: center;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoginButton = styled(LargeButton)`
  width: 120px;
`;
const RegistrationButton = styled(LargeButton)`
  width: 120px;
`;

export {
  WelcomeMain,
  ContentWrapper,
  ControlsWrapper,
  LoginButton,
  RegistrationButton,
  WelcomeTitle,
};
