import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/Navbar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Social Pulse",
  description: "Social Pulse - Best Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="flex justify-center">
      <body className="flex flex-col w-full 2xl:w-[1500px]">
        {/* <Navbar /> */}
        <ToastContainer theme="colored" pauseOnHover={false} />
        {children}
      </body>
    </html>
  );
}
