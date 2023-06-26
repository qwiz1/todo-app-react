import { AppRoute, ContentType, HttpMethod } from 'src/common/enums';
import { Http } from '../http/http.service';
import { Todo } from 'src/common/types';
import { createTodoModel } from 'src/models';

class TodoService extends Http {
  async getTodos(): Promise<Todo[]> {
    const todos = await this.load<Todo[]>(AppRoute.TODOS, {
      method: HttpMethod.GET,
    });
    return todos.map(createTodoModel);
  }

  getTodoById(id: number): Promise<Todo> {
    return this.load<Todo>(`${AppRoute.TODOS}/${id}`, {
      method: HttpMethod.GET,
    });
  }

  createTodo(payload: Omit<Todo, 'id' | 'isCompleted'>): Promise<Todo> {
    return this.load<Todo>(AppRoute.TODOS, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  updateTodo(id: number, payload: Partial<Omit<Todo, 'id'>>): Promise<Todo> {
    return this.load<Todo>(`${AppRoute.TODOS}/${id}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  deleteTodo(id: number): Promise<any> {
    return this.load<Todo>(`${AppRoute.TODOS}/${id}`, {
      method: HttpMethod.DELETE,
    });
  }
}

const todoService = new TodoService();
export { todoService };
