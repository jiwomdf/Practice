import {MMKV} from 'react-native-mmkv';
import {TodoModel} from '../model/todo-model';

export class MMKVTodoService {
  storage = new MMKV();

  TODOS_KEY = 'todos';

  getTodos = (): TodoModel[] => {
    const todosString = this.storage.getString(this.TODOS_KEY);
    return todosString ? (JSON.parse(todosString) as TodoModel[]) : [];
  };

  saveTodos = (todos: TodoModel[]): void => {
    this.storage.set(this.TODOS_KEY, JSON.stringify(todos));
  };

  addTodo = (todo: TodoModel): void => {
    const todos = this.getTodos();
    todos.push(todo);
    this.saveTodos(todos);
  };

  removeTodo = (id: string): void => {
    const todos = this.getTodos();
    const filteredTodos = todos.filter(todo => todo.id !== id);
    this.saveTodos(filteredTodos);
  };
}
