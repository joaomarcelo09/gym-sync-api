import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { randomUUID } from 'crypto';
import { UpdateSheetDto } from './dto/update-sheet.dto';

@Injectable()
export class SheetRepository {
  constructor(private prisma: PrismaService) {}

  async createWithExercises(data: CreateSheetDto) {
    const newSheet = await this.prisma.sheet.create({
      data: {
        id: randomUUID(),
        biotype: data.biotype,
        weight: data.weight,
        height: data.height,
      },
    });

    data.exercises.map(async (x) => {
      await this.prisma.sheetExercises.create({
        data: {
          id: randomUUID(),
          idSheet: newSheet.id,
          ...x,
        },
      });
    });

    return { newSheet };
  }

  async update(id: string, data: UpdateSheetDto) {
    return await this.prisma.sheet.update({ where: { id }, data });
  }

  async findOne({ where, include }) {
    return await this.prisma.sheet.findFirst({ where, include });
  }
}
