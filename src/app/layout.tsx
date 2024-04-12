import type { Metadata } from "next";
import "./globals.css";

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
