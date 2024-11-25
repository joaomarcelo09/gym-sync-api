import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(opt) {
    return await this.repository.findOne(opt);
  }

  async findSheetForAthlete(opt) {
    const optSheet = {
      where: {
        weight: {
          gte: opt.weight - 5,
          lte: opt.weight + 5,
        },
        height: {
          gte: opt.height - 5,
          lte: opt.height + 5,
        },
        biotype: opt.biotype,
      },
      include: {},
    };

    const findSheet = await this.repository.findOne(optSheet);

    if (!findSheet)
      throw new HttpException(
        'Sheet not found for this athlete',
        HttpStatus.NOT_FOUND,
      );

    return findSheet;
  }

  async update(id: string, updateSheetDto: UpdateSheetDto) {
    return await this.repository.update(id, updateSheetDto);
  }

  remove(id: number) {
    return `This action removes a #${id} sheet`;
  }
}
