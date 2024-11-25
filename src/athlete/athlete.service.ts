import { Injectable } from '@nestjs/common';
import { AthleteRepository } from './athlete.repository';

@Injectable()
export class AthleteService {
  constructor(private repository: AthleteRepository) {}

  async create(data) {
    const athlete = await this.repository.create(data);
    return athlete;
  }
}
