import { PrismaService } from 'src/database/prisma.service';
import { intensityMain, exerciseMain } from './seeders';

const $prisma = new PrismaService();

async function main() {
  console.log('iniciar seeder');

  await $prisma.$transaction(async (trans) => {
    await exerciseMain(trans);
    await intensityMain(trans);
  });

  console.log('finalizar seeder');
}

main();
