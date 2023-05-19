import { FastifyInstance } from "fastify";
import { prisma } from "../lib/pisma";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/users", async () => {
    const users = await prisma.user.findMany();

    return users;
  });

  app.get("/memories/:id", async () => {
    const users = await prisma.user.findMany();

    return users;
  });
}
