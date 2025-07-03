import bcrypt from "bcryptjs";

import { prisma } from "./prisma-client";

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {
      password: bcrypt.hashSync("admin2025@", 10),
    },
    create: {
      email: "admin@admin.com",
      password: bcrypt.hashSync("admin2025@", 10),
      role: "ADMIN",
    },
  });

  if (user) {
    console.log("Admin user created");
  }
}

main().then(async () => {
  await prisma.$disconnect();
});
