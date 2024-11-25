import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntensityService } from './intensity.service';
import { CreateIntensityDto } from './dto/create-intensity.dto';
import { UpdateIntensityDto } from './dto/update-intensity.dto';

@Controller('intensity')
export class IntensityController {
  constructor(private readonly intensityService: IntensityService) {}

  @Post()
  async create(@Body() createIntensityDto: CreateIntensityDto) {
    return await this.intensityService.create(createIntensityDto);
  }

  @Get()
  findAll() {
    return this.intensityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intensityService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIntensityDto: UpdateIntensityDto,
  ) {
    return await this.intensityService.update(id, updateIntensityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intensityService.remove(+id);
  }
}
