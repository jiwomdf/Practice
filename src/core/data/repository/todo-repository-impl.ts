import {MMKVTodoService} from '../local/mmkv-todo-service';
import {TodoModel} from '../model/todo-model';

export class TodoRepositoryImpl {
  constructor(private mmvk: MMKVTodoService) {}

  async addTodo(todo: TodoModel): Promise<boolean> {
    try {
      const result = await this.mmvk.addTodo(todo);
      return result != null;
    } catch (error) {
      throw error;
    }
  }

  async removeTodo(todo: TodoModel): Promise<boolean> {
    try {
      const result = await this.mmvk.removeTodo(todo.id);
      return result != null;
    } catch (error) {
      throw error;
    }
  }
}
