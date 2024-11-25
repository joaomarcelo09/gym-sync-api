import { Module } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';
import { SheetRepository } from './sheet.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [SheetController],
  providers: [SheetService, SheetRepository, PrismaService],
})
export class SheetModule {}
