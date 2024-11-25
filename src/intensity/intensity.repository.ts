import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateIntensityDto } from './dto/create-intensity.dto';
import { randomUUID } from 'crypto';
import { UpdateExerciseDto } from 'src/exercise/dto/update-exercise.dto';

@Injectable()
export class IntensityRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateIntensityDto) {
    return await this.prisma.intensity.create({
      data: {
        id: randomUUID(),
        ...data,
      },
    });
  }

  async update(id: string, data: UpdateExerciseDto) {
    return await this.prisma.intensity.update({ where: { id }, data });
  }
}
