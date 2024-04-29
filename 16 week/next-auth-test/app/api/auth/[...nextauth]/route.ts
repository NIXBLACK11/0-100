import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

// export function GET(req: NextRequest, params: any) {
//     console.log(params);

//     return NextResponse.json({
//         message: "api/auth/random"
//     })
// }

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'Email'},
                password: { label: 'password', type: 'password', placeholder: 'Password'},
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                const user = await prisma.user.findOne({
                    where: {
                        email: username,
                        password: password
                    }
                })
                // simply return null in case of error next auth will understand
                if(!user) {
                    return null;
                }
                return {
                    id: user.id,
                    email: user.email
                };
            },
        })
    ]
});

export const GET = handler;