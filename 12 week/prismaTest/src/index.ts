import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(username: string, password: string, firstName: string, lastName: string, email: string) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response);
}

createUser("user2", "password2", "first2", "last2", "email2");