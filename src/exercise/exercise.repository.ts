import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { randomUUID } from 'crypto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExerciseDto) {
    return await this.prisma.exercise.create({
      data: {
        id: randomUUID(),
        ...data,
      },
    });
  }

  async update(id: string, data: UpdateExerciseDto) {
    return await this.prisma.exercise.update({
      where: {
        id,
      },
      data,
    });
  }
}
