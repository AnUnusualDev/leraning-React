import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  // Während des Vercel-Builds (CI) geben wir ein leeres Objekt zurück
  (process.env.VERCEL && !process.env.DATABASE_URL?.includes("localhost")
    ? ({} as PrismaClient)
    : new PrismaClient());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
