import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
        <Navbar />
        {children}
        </Provider>
      </body>
    </html>
  );
}
