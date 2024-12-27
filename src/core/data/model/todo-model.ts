export class TodoModel {
  id: string;
  title: string;
  content: string;
  completed: boolean;

  constructor(id: string, title: string, content: string, complete: boolean) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.completed = complete;
  }
}
