import { PartialType } from '@nestjs/mapped-types';
import { CreateIntensityDto } from './create-intensity.dto';

export class UpdateIntensityDto extends PartialType(CreateIntensityDto) {}
