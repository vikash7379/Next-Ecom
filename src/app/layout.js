import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/toolkit/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
