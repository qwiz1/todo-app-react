import React from 'react';
import { Switch } from '@mui/material';
import { Field, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { BaseModal } from '../modal-popup';
import { MediumButton } from '../styled-components/button';
import {
  ButtonContainer,
  StyledForm,
  SwitchContainer,
} from './add-todo-popup.styled';
import { ADD_TODO_INITIAL_VALUES } from 'src/common/constants';
import { InputField, TextareaField } from '../fields';
import { FieldLabel } from '../styled-components/field-label';
import { useCreateTodo } from 'src/query-hooks';
import { AddTodoPayload } from 'src/common/types';
import { AddTodoSchema } from 'src/schemas';

type Props = {
  isModalVisible: boolean;
  onBackdropClick: () => void;
};

const AddTodoPopup: React.FC<Props> = ({ isModalVisible, onBackdropClick }) => {
  const { mutate } = useCreateTodo();

  const handleSubmit = (
    todoValues: AddTodoPayload,
    { setSubmitting }: FormikHelpers<AddTodoPayload>,
  ) => {
    setSubmitting(false);
    mutate(todoValues);
    toast.success('Todo Created');
    onBackdropClick();
  };

  return (
    <BaseModal
      title="Add Todo"
      isModalVisible={isModalVisible}
      onBackdropClick={onBackdropClick}
    >
      <Formik
        initialValues={ADD_TODO_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={AddTodoSchema}
      >
        <StyledForm>
          <InputField label="Title:" id="title-field" name="title" />
          <TextareaField
            label="Description:"
            id="description-field"
            name="description"
            rows={4}
          />
          <SwitchContainer>
            <FieldLabel htmlFor="is-private-switch">Is Private:</FieldLabel>
            <Field
              id="is-private-switch"
              name="isPrivate"
              type="checkbox"
              as={Switch}
            />
          </SwitchContainer>
          <ButtonContainer>
            <MediumButton type="submit">Add</MediumButton>
          </ButtonContainer>
        </StyledForm>
      </Formik>
    </BaseModal>
  );
};

export { AddTodoPopup };
