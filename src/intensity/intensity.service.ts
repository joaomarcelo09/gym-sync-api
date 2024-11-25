import { Injectable } from '@nestjs/common';
import { CreateIntensityDto } from './dto/create-intensity.dto';
import { UpdateIntensityDto } from './dto/update-intensity.dto';

@Injectable()
export class IntensityService {
  create(createIntensityDto: CreateIntensityDto) {
    return 'This action adds a new intensity';
  }

  findAll() {
    return `This action returns all intensity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intensity`;
  }

  update(id: number, updateIntensityDto: UpdateIntensityDto) {
    return `This action updates a #${id} intensity`;
  }

  remove(id: number) {
    return `This action removes a #${id} intensity`;
  }
}
