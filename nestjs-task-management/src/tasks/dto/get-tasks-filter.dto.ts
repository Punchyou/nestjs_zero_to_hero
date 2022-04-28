import { TaskStatus } from '../tasks.model';

// make a dto to filter my search based on multiple parameters
// ? is for optional
export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
