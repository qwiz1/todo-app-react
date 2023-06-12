import { TodoItem } from '../todo-item';
import { Todo } from 'src/common/types';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="todoList">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </section>
);

export { TodoList };
