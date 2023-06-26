import * as Yup from 'yup';

const AddTodoSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  isPrivate: Yup.boolean(),
});

export { AddTodoSchema };
