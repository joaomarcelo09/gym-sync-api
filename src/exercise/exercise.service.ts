import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExerciseRepository } from './exercise.repository';

@Injectable()
export class ExerciseService {
  constructor(private repository: ExerciseRepository) {}
  async create(data: CreateExerciseDto) {
    return await this.repository.create(data);
  }

  findAll() {
    return `This action returns all exercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  async update(id: string, data: UpdateExerciseDto) {
    return await this.repository.update(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
