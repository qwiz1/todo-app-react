import { Field, FieldAttributes, useField } from 'formik';
import { FieldContainer } from '../commons';
import { Input } from '../commons/input';
import { FieldLabel } from '../commons/field-label';
import { ErrorMessage } from '../commons/error-message/error-message.styled';

type InputFieldProps = FieldAttributes<{
  type?: string;
  label?: string;
}>;

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <FieldContainer>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Field id={id} type={type} {...field} as={Input} />
      {errorText && <ErrorMessage>{errorText}</ErrorMessage>}
    </FieldContainer>
  );
};

export { InputField };
