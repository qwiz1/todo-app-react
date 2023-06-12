import React from 'react';
import { Switch } from '@mui/material';
import { Field, Formik } from 'formik';
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

type Props = {
  isModalVisible: boolean;
  onBackdropClick: () => void;
};

const AddTodoPopup: React.FC<Props> = ({ isModalVisible, onBackdropClick }) => {
  return (
    <BaseModal
      title="Add Todo"
      isModalVisible={isModalVisible}
      onBackdropClick={onBackdropClick}
    >
      <Formik
        initialValues={ADD_TODO_INITIAL_VALUES}
        onSubmit={(v: any) => console.log(v)}
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
