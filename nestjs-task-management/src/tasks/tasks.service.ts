import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // array of Task tasks
  // could have return the using a public tasks,
  // but want to limit errors potenatially happening
  // to changes to a public var that can be changes
  // everywhere throughout the project
  getAllTasks(): Task[] {
    return this.tasks;
  } // returns array of Task tasks

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
