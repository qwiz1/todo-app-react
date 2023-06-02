import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { InputField } from 'src/components/fields';
import { MediumButton } from 'src/components/styled-components/button';
import { SIGN_UP_INITIAL_VALUES } from 'src/common/constants';
import {
  ButtonsContainer,
  FormContainer,
  StyledForm,
} from '../sign-in/sign-in.styled';
import { AppRoute } from 'src/common/enums';
import { FormTitle } from 'src/components/styled-components/form-title';

const SignUp: React.FC = () => {
  // const { mutate } = useSignUp(() => {
  //   toast.success('We send confirmation link on your email! Check it!');
  // });

  // const handleSubmit = (
  //   sigUpValues: SignUpPayload,
  //   { setSubmitting }: FormikHelpers<SignUpPayload>
  // ) => {
  //   setSubmitting(false);
  //   mutate(sigUpValues);
  //   console.log(sigUpValues);
  // };
  return (
    <Formik
      initialValues={SIGN_UP_INITIAL_VALUES}
      // validationSchema={SignUpSchema}
      onSubmit={(v: any) => console.log(v)}
    >
      <FormContainer>
        <StyledForm>
          <FormTitle>Sign up</FormTitle>
          <InputField
            label="Email:"
            id="email-sign-up-field"
            name="email"
            type="email"
          />
          <InputField
            label="Password:"
            id="password-sign-up-field"
            name="password"
            type="password"
          />
          <InputField
            label="Password confirmation:"
            id="confirm-password-sign-up-field"
            name="confirmationPassword"
            type="password"
          />
          <ButtonsContainer>
            <Link to={AppRoute.WELCOME}>
              <MediumButton>Back</MediumButton>
            </Link>
            <MediumButton type="submit">Sign Up</MediumButton>
          </ButtonsContainer>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default SignUp;
