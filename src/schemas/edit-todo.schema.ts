import * as Yup from 'yup';

const EditTodoSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  isPrivate: Yup.boolean(),
  isCompleted: Yup.boolean(),
});

export { EditTodoSchema };
