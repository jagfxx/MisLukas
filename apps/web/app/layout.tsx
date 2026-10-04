import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MisLukas",
  description: "MisLukas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppinsFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center  h-screen w-screen ">
      <Navbar />
        {children}
        </body>
    </html>
  );
}
