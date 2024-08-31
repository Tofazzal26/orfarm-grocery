import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import UserModel from "../../UserModel/UserModel";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NextSECRET,
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
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        await ConnectMongoose();
        const currentUser = await UserModel.findOne({ email });
        if (!currentUser) {
          return null;
        }

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
