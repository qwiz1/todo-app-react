import { FieldLabel } from 'src/components/styled-components/field-label';
import {
  ButtonGroup,
  EditForm,
  FieldContainer,
  SwitchContainer,
  SwitchesContainer,
  EditTodoMain,
} from './edit-todo.styled';
import { MediumButton } from 'src/components/styled-components/button';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Switch } from '@mui/material';
import { AppRoute } from 'src/common/enums';
import { Field, Formik, FormikHelpers } from 'formik';
import { InputField, TextareaField } from 'src/components/fields';
import { FormTitle } from 'src/components/styled-components/form-title';
import { useGetTodoById, useUpdateTodo } from 'src/query-hooks';
import { EditTodoPayload } from 'src/common/types';
import { toast } from 'react-toastify';
import { EditTodoSchema } from 'src/schemas';

type Todo = {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
};

const EditTodo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: todo } = useGetTodoById(Number(id));

  const { mutate: mutateUpdateTodo, isSuccess } = useUpdateTodo();

  if (!todo) {
    return <h2>Loading...</h2>;
  }

  const initialValues: Todo = {
    title: todo.title,
    description: todo.description,
    isCompleted: todo.isCompleted,
    isPrivate: todo.isPrivate,
  };

  const handleSubmit = (
    todoValues: EditTodoPayload,
    { setSubmitting }: FormikHelpers<EditTodoPayload>,
  ) => {
    setSubmitting(false);
    mutateUpdateTodo({ id: todo.id, data: todoValues });
    toast.success('Todo Edited');
  };

  if (isSuccess) {
    return <Navigate to={`${AppRoute.TODOS}/${todo.id}`} replace={true} />;
  }

  return (
    <EditTodoMain>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={EditTodoSchema}
      >
        <EditForm>
          <FormTitle>Edit Todo</FormTitle>
          <FieldLabel htmlFor="edit-title">Title:</FieldLabel>
          <FieldContainer>
            <InputField id="edit-title" name="title" />
          </FieldContainer>
          <FieldLabel htmlFor="edit-description">Description:</FieldLabel>
          <FieldContainer>
            <TextareaField id="edit-description" name="description" rows={6} />
          </FieldContainer>
          <SwitchesContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="edit-is-completed">Completed:</FieldLabel>
              <Field
                id="edit-is-completed"
                name="isCompleted"
                type="checkbox"
                as={Switch}
              />
            </SwitchContainer>
            <SwitchContainer>
              <FieldLabel htmlFor="edit-is-private">Private:</FieldLabel>
              <Field
                id="edit-is-private"
                name="isPrivate"
                type="checkbox"
                as={Switch}
              />
            </SwitchContainer>
          </SwitchesContainer>
          <ButtonGroup>
            <Link to={`${AppRoute.TODOS}/${todo.id}`}>
              <MediumButton>Back</MediumButton>
            </Link>
            <MediumButton type="submit">Save</MediumButton>
          </ButtonGroup>
        </EditForm>
      </Formik>
    </EditTodoMain>
  );
};

export default EditTodo;
