import { Controller } from '@nestjs/common';
import { AthleteService } from './athlete.service';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}
}
