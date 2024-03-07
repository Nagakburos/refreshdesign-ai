import NextAuth from "next-auth"
import { authOptions } from "@/utils/auth-option";

const handler = NextAuth(authOptionsuthOptions);

export { handler as GET, handler as POST};