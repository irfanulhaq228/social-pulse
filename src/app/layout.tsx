import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Pulse",
  description: "Social Pulse - Best Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
