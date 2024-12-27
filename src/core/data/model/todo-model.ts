export class TodoModel {
  id: string;
  title: string;
  content: string;
  completed: boolean;

  constructor(id: string, title: string, complete: boolean) {
    this.id = id;
    this.title = title;
    this.content = title;
    this.completed = complete;
  }
}
