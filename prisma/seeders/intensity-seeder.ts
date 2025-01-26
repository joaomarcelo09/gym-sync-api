import { PrismaClient } from '@prisma/client';

const $prisma = new PrismaClient();

const intensity = [];

export async function intensityMain(tx?) {
  const prisma = tx ?? $prisma;

  const intenSgbd = await prisma.intensity.findMany();

  const del = intenSgbd.filter(
    (sgdb) => !intensity.some((prog) => sgdb.idSeeder === prog.idSeeder),
  );
  const update = intensity.filter((prog) =>
    intenSgbd.some((sgdb) => sgdb.idSeeder === prog.idSeeder),
  );
  const add = intensity.filter(
    (prog) => !intenSgbd.some((sgdb) => sgdb.idSeeder === prog.idSeeder),
  );

  const idRel = [
    ...del.map((del) => del.id),
    ...update.map((up) => {
      return intenSgbd.find((pg) => pg.idSeeder === up.idSeeder)?.id;
    }),
  ];

  const rel = await prisma.sheetExercises.findMany({
    where: {
      idIntensity: {
        in: idRel,
      },
    },
  });

  let requests = [];

  if (del?.length) {
    const delRel = rel
      .filter((rel) => del.some((s) => s.id === rel.id))
      ?.map((del) => {
        return del.id;
      });

    await prisma.sheetExercises.deleteMany({
      where: {
        idIntensity: {
          in: delRel,
        },
      },
    });

    await prisma.intensity.deleteMany({
      where: {
        id: {
          in: del.map((dl) => dl.id),
        },
      },
    });
  }

  if (add?.length) requests.push(prisma.intensity.createMany({ data: add }));

  if (update?.length) {
    const updateReq = update.map((up) => {
      const { id } = intenSgbd.find((pg) => pg.idSeeder === up.idSeeder);

      return prisma.intensity.update({
        where: {
          id,
        },
        data: up,
      });
    });
    requests = [...requests, ...updateReq];
  }

  await Promise.all(requests);
  return true;
}
