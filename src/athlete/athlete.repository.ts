import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AthleteRepository {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    return await this.prisma.athlete.create({
      data: {
        id: randomUUID(),
        createdAt: new Date(),
        ...data,
      },
    });
  }
}
