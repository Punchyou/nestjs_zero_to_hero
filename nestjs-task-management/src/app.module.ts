import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// decorator that makes AppModule class into a module. include some properties inside
@Module({
  imports: [TasksModule],
})
export class AppModule {}
