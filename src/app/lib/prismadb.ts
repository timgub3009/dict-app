import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;

// nexjs hotreloading rerun the code every time we change something in the project
// prisma in this case creates a bunch of prisma instances we don't need
// we do a trick: we save prisma in a global file (env) which isn't affected by hot reloading process of nextjs

