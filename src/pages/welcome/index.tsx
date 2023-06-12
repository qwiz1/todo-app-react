import {
  ContentWrapper,
  ControlsWrapper,
  LoginButton,
  RegistrationButton,
  WelcomeMain,
  WelcomeTitle,
} from './welcome.styled';
import { Link } from 'react-router-dom';
import { AppRoute } from 'src/common/enums';

const Welcome: React.FC = () => {
  return (
    <WelcomeMain>
      <ContentWrapper>
        <WelcomeTitle>Todo App</WelcomeTitle>
        <ControlsWrapper>
          <Link to={AppRoute.SIGN_IN}>
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to={AppRoute.SIGN_UP}>
            <RegistrationButton>Register</RegistrationButton>
          </Link>
          <Link to={AppRoute.FORGOT_PASSWORD}>Forgot a password?</Link>
        </ControlsWrapper>
      </ContentWrapper>
    </WelcomeMain>
  );
};

export default Welcome;
