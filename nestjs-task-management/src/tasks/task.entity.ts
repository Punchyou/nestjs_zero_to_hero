import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks.model';

@Entity()
export class Task {
  //means that id will be the primary key in the DB.
  //'uuid' will automatically use the uuid,
  //instead of incremented numbers that are default in postgress
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;
}
