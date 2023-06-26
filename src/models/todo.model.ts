import { Todo } from '../common/types';

class TodoModel {
  id: number;

  title: string;

  description: string;

  isCompleted: boolean;

  isPrivate: boolean;

  constructor({ id, title, description, isCompleted, isPrivate }: Todo) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.isPrivate = isPrivate;
  }
}

const createTodoModel = (todoFromServer: Todo): TodoModel =>
  new TodoModel(todoFromServer);

export { createTodoModel };

export default TodoModel;
