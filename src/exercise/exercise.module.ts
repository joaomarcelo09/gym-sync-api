import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ExerciseRepository } from './exercise.repository';

@Module({
  imports: [ExerciseRepository],
  controllers: [ExerciseController],
  providers: [ExerciseService, PrismaService],
})
export class ExerciseModule {}
