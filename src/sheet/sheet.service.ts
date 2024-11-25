import { Injectable } from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import { SheetRepository } from './sheet.repository';

@Injectable()
export class SheetService {
  constructor(private repository: SheetRepository) {}
  async create(createSheetDto: CreateSheetDto) {
    return await this.repository.createWithExercises(createSheetDto);
  }

  findAll() {
    return `This action returns all sheet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sheet`;
  }

  async update(id: string, updateSheetDto: UpdateSheetDto) {
    return await this.repository.update(id, updateSheetDto);
  }

  remove(id: number) {
    return `This action removes a #${id} sheet`;
  }
}
