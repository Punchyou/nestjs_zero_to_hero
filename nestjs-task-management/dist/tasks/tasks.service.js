"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_status_enum_1 = require("./tasks-status.enum");
const task_respository_1 = require("./task.respository");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async getTaskById(id) {
        const found = await this.tasksRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID "$(id)" not found`);
        }
        return found;
    }
    async createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = this.tasksRepository.create({
            title,
            description,
            status: tasks_status_enum_1.TaskStatus.OPEN,
        });
        await this.tasksRepository.save(task);
        return task;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_respository_1.TasksRepository)),
    __metadata("design:paramtypes", [task_respository_1.TasksRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map