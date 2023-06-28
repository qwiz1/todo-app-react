import { Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { FORGOT_PASS_INITIAL_VALUES } from 'src/common/constants';
import {
  ButtonsContainer,
  FormContainer,
  StyledForm,
} from '../sign-in/sign-in.styled';
import { InputField } from 'src/components/fields';
import { MediumButton } from 'src/components/styled-components/button';
import { AppRoute } from 'src/common/enums';
import { FormTitle } from 'src/components/styled-components/form-title';
import { useForgotPassword } from 'src/query-hooks/auth.hooks';
import { ForgotPassPayload } from 'src/common/types';

const ForgotPassword: React.FC = () => {
  const { mutate } = useForgotPassword();

  const handleSubmit = (
    sigInValues: ForgotPassPayload,
    { setSubmitting }: FormikHelpers<ForgotPassPayload>,
  ) => {
    setSubmitting(false);
    mutate(sigInValues);
  };

  return (
    <Formik initialValues={FORGOT_PASS_INITIAL_VALUES} onSubmit={handleSubmit}>
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
