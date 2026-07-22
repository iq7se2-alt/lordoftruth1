// Prisma seed file (minimal)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // No seed data needed for build
  console.log('Seed: nothing to do.');
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
