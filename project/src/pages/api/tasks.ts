import { PrismaClient } from '@prisma/client';


export default async function handler() {
    const prisma = new PrismaClient();
  
}

export async function POST(requset: Request) {
    return new Response("{hello: \"world\"}")
}
