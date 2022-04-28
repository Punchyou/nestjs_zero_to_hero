export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// want status to acesspt specific types, so we use enum for status
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
