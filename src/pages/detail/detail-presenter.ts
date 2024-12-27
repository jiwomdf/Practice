import {MMKVTodoService} from '../../core/data/local/mmkv-todo-service';
import {TodoModel} from '../../core/data/model/todo-model';
import {TodoRepositoryImpl} from '../../core/data/repository/todo-repository-impl';

export const addTodo = (todo: TodoModel) => {
  let keychain = new MMKVTodoService();
  let authService = new TodoRepositoryImpl(keychain);
  return authService.addTodo(todo);
};

export const getDetail = () => {
  let keychain = new MMKVTodoService();
  let authService = new TodoRepositoryImpl(keychain);
  return authService.getTodos();
};
