import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
        
        
        return session
      },
    async signIn({ profile }) {        
      return true 
    },
  }
};

//TODO MINUTO DO VIDEO 5:35
