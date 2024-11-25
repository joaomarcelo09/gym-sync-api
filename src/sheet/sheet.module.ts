import { Module } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';
import { SheetRepository } from './sheet.repository';

@Module({
  imports: [SheetRepository],
  controllers: [SheetController],
  providers: [SheetService],
})
export class SheetModule {}
