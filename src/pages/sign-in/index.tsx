import { Formik, FormikHelpers } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { SIGN_IN_INITIAL_VALUES } from 'src/common/constants';
import { FormContainer, ButtonsContainer, StyledForm } from './sign-in.styled';
import { InputField } from 'src/components/fields';
import { AppRoute } from 'src/common/enums';
import { SignInPayload } from 'src/common/types';
import { MediumButton } from 'src/components/styled-components/button';
import { FormTitle } from 'src/components/styled-components/form-title';
import { useSignIn } from 'src/query-hooks/auth.hooks';

const SignIn: React.FC = () => {
  const { mutate, isSuccess } = useSignIn();

  const handleSubmit = (
    sigInValues: SignInPayload,
    { setSubmitting }: FormikHelpers<SignInPayload>,
  ) => {
    setSubmitting(false);
    mutate(sigInValues);
  };

  if (isSuccess) {
    return <Navigate to={`${AppRoute.TODOS}`} replace={true} />;
  }

  return (
    <Formik initialValues={SIGN_IN_INITIAL_VALUES} onSubmit={handleSubmit}>
      <FormContainer>
        <StyledForm>
          <FormTitle>Sign in</FormTitle>
          <InputField label="Email:" id="email-field" name="email" />
          <InputField
            label="Password:"
            id="password-field"
            type="password"
            name="password"
          />
          <ButtonsContainer>
            <Link to={AppRoute.WELCOME}>
              <MediumButton type="button">Back</MediumButton>
            </Link>
            <MediumButton type="submit">Sign In</MediumButton>
          </ButtonsContainer>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default SignIn;
