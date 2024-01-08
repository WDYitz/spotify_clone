/* eslint-disable import/no-anonymous-default-export */
import prisma from "./prisma";

export default {
  getAllUsers: async () => {
    const users = prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });
    return users;
  },
};
