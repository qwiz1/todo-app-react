import { Formik } from 'formik';
import { SIGN_IN_INITIAL_VALUES } from 'src/common/constants';
import { FormContainer, ButtonsContainer, StyledForm } from './sign-in.styled';
import { InputField } from 'src/components/fields';
import { AppRoute } from 'src/common/enums';
import { Link } from 'react-router-dom';
import { MediumButton } from 'src/components/styled-components/button';
import { FormTitle } from 'src/components/styled-components/form-title';

const SignIn: React.FC = () => {
  // const history = useHistory();

  // const { mutate } = useSignIn(() => {
  //   toast.success('Successfully signed in!');
  // });

  // const handleSubmit = (
  //   sigInValues: SignInPayload,
  //   { setSubmitting }: FormikHelpers<SignInPayload>,
  // ) => {
  //   setSubmitting(false);
  //   mutate(sigInValues);
  //   history.replace('/');
  // };
  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      // validationSchema={SignInSchema}
      onSubmit={(signInValues: any) => console.log(signInValues)}
    >
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
              <MediumButton>Back</MediumButton>
            </Link>
            <MediumButton type="submit">Sign In</MediumButton>
          </ButtonsContainer>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default SignIn;
