import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {// fancy way to coerce typescript
    prisma: PrismaClient | undefined
}

export const prisma =
 globalForPrisma.prisma ?? // check to see if prisma is there first
    new PrismaClient({
        log: ['query'],
    })

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma