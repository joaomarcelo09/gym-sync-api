import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { AthleteController } from './athlete.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AthleteRepository } from './athlete.repository';

@Module({
  imports: [AthleteRepository],
  controllers: [AthleteController],
  providers: [AthleteService, PrismaService],
})
export class AthleteModule {}
