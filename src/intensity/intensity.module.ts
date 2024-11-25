import { Module } from '@nestjs/common';
import { IntensityService } from './intensity.service';
import { IntensityController } from './intensity.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [IntensityController],
  providers: [IntensityService, PrismaService],
})
export class IntensityModule {}
