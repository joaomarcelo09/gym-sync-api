import { Body, Controller, Post } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { SheetService } from 'src/sheet/sheet.service';

@Controller('athlete')
export class AthleteController {
  constructor(
    private readonly athleteService: AthleteService,
    private readonly sheetService: SheetService,
  ) {}

  @Post()
  async create(@Body() createAthleteDto: CreateAthleteDto) {
    const findSheet =
      await this.sheetService.findSheetForAthlete(createAthleteDto);

    const data = {
      idSheet: findSheet.id,
      ...createAthleteDto,
    };

    return await this.athleteService.create(data);
  }
}
