import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        // !TODO: to be replace with real API
        const user = {
          id: "25",
          name: "codemarns",
          password: "codemarns@github123",
        };

        // if (
        //   credentials?.username === user.name &&
        //   credentials?.password === user.password
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        )
          return user;
        return null;
      },
    }),
  ],
};
