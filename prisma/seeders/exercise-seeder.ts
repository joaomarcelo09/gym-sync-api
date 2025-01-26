import { PrismaClient } from '@prisma/client';

const $prisma = new PrismaClient();

const exercises = [
  {
    id: 'd3f7d009-e2e4-49ea-af61-0c41a528f57a',
    idSeeder: '0e047f90-1f1d-4c53-8ba4-8c727e6cdb67',
    name: 'Voador Frontal',
    type: '',
  },
  {
    id: 'e7252d14-e478-4bac-bb68-668f5f4e0ad1',
    idSeeder: 'b7ca786e-d04c-4e91-a29d-5b3783e1ad12',
    name: 'Supino Vertical',
    type: '',
  },
  {
    id: '3ad9e4f1-70e5-4749-bd5e-5ea87a72778c',
    idSeeder: '5e8d95bd-6b2a-4a1f-b512-3590ed7e4b84',
    name: 'Supino 30 graus',
    type: '',
  },
  {
    id: 'ed142dfb-ef0a-4740-9539-96332d78ea40',
    idSeeder: 'b5a5fad9-59e5-4e79-9650-7b973541de6d',
    name: 'Tríceps no Cross',
    type: '',
  },

  {
    id: '16a8910e-4aae-4996-ab9f-f4afe8ecbc83',
    idSeeder: 'ec3a4307-3b70-4c45-8e83-40acb86c12ae',
    name: 'Cadeira Extensora',
    type: '',
  },
  {
    id: 'affbf0bf-779a-497b-bbc2-6637f35f2b2a',
    idSeeder: '46edc1fa-4179-45ec-915c-400a26fbb795',
    name: 'Cadeira Flexora',
    type: '',
  },
];

export async function exerciseMain(tx?) {
  const prisma = tx ?? $prisma;

  const exerSgbd = await prisma.exercise.findMany();

  const del = exerSgbd.filter(
    (sgdb) => !exercises.some((prog) => sgdb.idSeeder === prog.idSeeder),
  );
  const update = exercises.filter((prog) =>
    exerSgbd.some((sgdb) => sgdb.idSeeder === prog.idSeeder),
  );
  const add = exercises.filter(
    (prog) => !exerSgbd.some((sgdb) => sgdb.idSeeder === prog.idSeeder),
  );

  const idRel = [
    ...del.map((del) => del.id),
    ...update.map((up) => {
      return exerSgbd.find((pg) => pg.idSeeder === up.idSeeder)?.id;
    }),
  ];

  const rel = await prisma.sheetExercises.findMany({
    where: {
      idExercise: {
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
        idExercise: {
          in: delRel,
        },
      },
    });

    await prisma.exercise.deleteMany({
      where: {
        id: {
          in: del.map((dl) => dl.id),
        },
      },
    });
  }

  if (add?.length) requests.push(prisma.exercise.createMany({ data: add }));

  if (update?.length) {
    const updateReq = update.map((up) => {
      const { id } = exerSgbd.find((pg) => pg.idSeeder === up.idSeeder);

      return prisma.exercise.update({
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
