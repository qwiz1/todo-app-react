import { Todo } from './todo.type';

export type User = {
  id: number;
  email: string;
  todos?: Todo[];
};
