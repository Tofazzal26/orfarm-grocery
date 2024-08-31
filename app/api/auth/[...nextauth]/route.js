import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        return true;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
