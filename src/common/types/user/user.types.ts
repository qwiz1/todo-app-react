import { Todo } from '../todo';

export type User = {
  id: number;
  email: string;
  todos?: Todo[];
};
