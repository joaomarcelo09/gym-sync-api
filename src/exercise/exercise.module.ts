import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExerciseRepository } from './exercise.repository';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, PrismaService, ExerciseRepository],
})
export class ExerciseModule {}
