import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../tasks.model';

// make a dto to filter my search based on multiple parameters
// ? is for optional, or IsOptional
export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}
