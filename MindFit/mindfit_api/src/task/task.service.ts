import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const task = this.repository.create(createTaskDto)
    task.status = TaskStatus.ABERTO

    return await this.repository.save(task);
  }

  async findAll() {
    const task = await this.repository.find();

    if (task) {
      return task;
    }

    throw new NotFoundException("Nenhuma tarefa encontrada");
  }

  async findOne(id: number) {
    const task = await this.repository.findOneBy({id: id});

    if (task) {
      return task;
    }
    
    throw new NotFoundException("Tarefa não encontrada");
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.repository.update({id: id}, updateTaskDto);
  }

  async remove(id: number) {
    return await this.repository.delete({id: id});
  }
}
