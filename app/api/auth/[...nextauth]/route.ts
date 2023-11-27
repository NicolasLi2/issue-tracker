import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/prisma/client';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  // when use adapter, next-auth change session strategy to JWT to database,
  // but database strategy does not work with OS providers like Google,
  // so need to set session strategy to JWT
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
