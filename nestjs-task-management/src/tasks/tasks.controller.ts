import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { title } from 'process';

// expose GET methof under 'tasks'
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // this will be called whenever a GET request comes in
  // not nessarily has to have the same name as the in the tasks module
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // user POST to create an instance of our resource
  // since this is POST, need to make sure we won't have whatever in out response back - we specificly
  //define parameters title and desription and we decorate them

  // @Body will take the body and assign it to the 'body' param
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }
}
