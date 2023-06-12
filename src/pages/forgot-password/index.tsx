import { Formik } from 'formik';
import { FORGOT_PASS_INITIAL_VALUES } from 'src/common/constants';
import {
  ButtonsContainer,
  FormContainer,
  StyledForm,
} from '../sign-in/sign-in.styled';
import { InputField } from 'src/components/fields';
import { MediumButton } from 'src/components/styled-components/button';
import { Link } from 'react-router-dom';
import { AppRoute } from 'src/common/enums';
import { FormTitle } from 'src/components/styled-components/form-title';

const ForgotPassword: React.FC = () => {
  return (
    <Formik
      initialValues={FORGOT_PASS_INITIAL_VALUES}
      onSubmit={(v: any) => console.log(v)}
    >
      <FormContainer>
        <StyledForm>
          <FormTitle>Forgot password?</FormTitle>
          <InputField
            label="Please enter email to restore:"
            id="email-forgot-field"
            name="email"
            type="email"
          />
          <ButtonsContainer>
            <Link to={AppRoute.WELCOME}>
              <MediumButton>Back</MediumButton>
            </Link>
            <MediumButton type="submit">Submit</MediumButton>
          </ButtonsContainer>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default ForgotPassword;
