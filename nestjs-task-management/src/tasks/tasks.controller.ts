import {
  Body,
  Query,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

// expose GET methof under 'tasks'
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // this will be called whenever a GET request comes in
  // not nessarily has to have the same name as the in the tasks module
  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    // if have any filter, call gettaskswillfilters -> we'll know this from the query param
    // else get all
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTaskWithFilter(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id') //@params coresponds to whatever follows the ':'
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  // user POST to create an instance of our resource
  // since this is POST, need to make sure we won't have whatever in out response back - we specificly
  //define parameters title and desription and we decorate them

  // @Body will take the body and assign it to the 'body' param
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = UpdateTaskStatusDto;
    return this.tasksService.updateTask(id, status);
  }
}
