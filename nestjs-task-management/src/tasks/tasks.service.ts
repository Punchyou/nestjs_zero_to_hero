import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { NotFoundError } from 'rxjs';
import { TasksRepository } from './task.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksModule } from './tasks.module';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }
  // private tasks: Task[] = []; // array of Task tasks
  // could have return the using a public tasks,
  // but want to limit errors potenatially happening
  // to changes to a public var that can be changes
  // everywhere throughout the project
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // } // returns array of Task tasks
  // getTaskWithFilter(filterDto: GetasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks(); // keep the result in array
  //   // do smthing with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     // return result
  //   }
  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    // async - always when interacting with DBs
    // needs the use of promises
    const found = await this.tasksRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "$(id)" not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = this.tasksRepository.delete(id);
    console.log(result);

    if ((await result).affected === 0) {
      throw new NotFoundException(`Task with "${id}" not found`);
    }
  }

  async updateTask(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.tasksRepository.save(id);
    return task;
  }
}
