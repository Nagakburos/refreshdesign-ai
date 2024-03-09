import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/gppgçe";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
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

//export default NextAuth(authOptions)