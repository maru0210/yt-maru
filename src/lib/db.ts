import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export interface DatabaseUser {
    id: string;
    username: string;
    password_hash: string;
}
