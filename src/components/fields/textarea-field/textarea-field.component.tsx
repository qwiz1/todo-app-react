import { Field, FieldAttributes, useField } from 'formik';
import { FieldContainer } from '../commons';
import { FieldLabel } from '../commons/field-label';
import { ErrorMessage } from '../commons/error-message/error-message.styled';
import { Textarea } from '../commons/textarea';

type TextareaFieldProps = FieldAttributes<{
  rows?: number;
  label?: string;
}>;

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  rows = 3,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : 'some error';
  return (
    <FieldContainer>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Field id={id} rows={rows} {...field} as={Textarea} />
      {errorText && <ErrorMessage>{errorText}</ErrorMessage>}
    </FieldContainer>
  );
};

export { TextareaField };
