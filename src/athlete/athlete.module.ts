import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { AthleteController } from './athlete.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AthleteRepository } from './athlete.repository';
import { SheetService } from 'src/sheet/sheet.service';
import { SheetRepository } from 'src/sheet/sheet.repository';

@Module({
  controllers: [AthleteController],
  providers: [
    AthleteService,
    PrismaService,
    SheetService,
    SheetRepository,
    AthleteRepository,
  ],
})
export class AthleteModule {}
