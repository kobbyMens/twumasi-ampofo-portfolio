import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { poppins } from "./ui/font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twumasi Ampofo | Portfolio",
  description: "My portfolio website as a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
