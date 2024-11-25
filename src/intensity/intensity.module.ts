import { Module } from '@nestjs/common';
import { IntensityService } from './intensity.service';
import { IntensityController } from './intensity.controller';
import { PrismaService } from 'src/database/prisma.service';
import { IntensityRepository } from './intensity.repository';

@Module({
  controllers: [IntensityController],
  providers: [IntensityService, PrismaService, IntensityRepository],
})
export class IntensityModule {}
