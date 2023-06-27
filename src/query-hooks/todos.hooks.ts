import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { todoService } from '../services';
import { AddTodoPayload, EditTodoPayload, Todo } from '../common/types';
import { QueryKey } from 'src/common/enums';

const useGetTodos = () =>
  useQuery({
    queryKey: [QueryKey.TODOS],
    queryFn: () => todoService.getTodos(),
  });

const useGetTodoById = (todoId: number) =>
  useQuery({
    queryKey: [QueryKey.TODO_ID, todoId],
    queryFn: () => todoService.getTodoById(todoId),
  });

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AddTodoPayload) => todoService.createTodo(payload),
    onSuccess: () =>
      queryClient.invalidateQueries([QueryKey.TODOS]),
  });
};

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { id: number; data: Partial<EditTodoPayload> }) =>
      todoService.updateTodo(payload.id, payload.data),
    onSuccess: (todo: Todo) => {
      queryClient.setQueryData([QueryKey.TODO_ID, todo.id], todo);
      queryClient.refetchQueries([QueryKey.TODOS]);
    },
  });
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => todoService.deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries([QueryKey.TODOS]),
  });
};

export {
  useCreateTodo,
  useGetTodos,
  useGetTodoById,
  useDeleteTodo,
  useUpdateTodo,
};
