import { Injectable } from '@nestjs/common';
import { CreateIntensityDto } from './dto/create-intensity.dto';
import { UpdateIntensityDto } from './dto/update-intensity.dto';
import { IntensityRepository } from './intensity.repository';

@Injectable()
export class IntensityService {
  constructor(private repository: IntensityRepository) {}
  async create(data: CreateIntensityDto) {
    return await this.repository.create(data);
  }

  findAll() {
    return `This action returns all intensity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intensity`;
  }

  async update(id: string, data: UpdateIntensityDto) {
    return await this.repository.update(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} intensity`;
  }
}
