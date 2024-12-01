import type { Metadata } from "next";
 import { Almarai } from "next/font/google"; // Updated import path
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

 

const almarai = Almarai({
  weight: "400", // Specify the weight you need
  subsets: ["arabic"], // Specify the subset if needed
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "مجلة نبض الاقتصاد",
  description: "مجلة نبض الاقتصاد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${almarai.variable} ${almarai.variable} ${almarai.className} antialiased`} // Add Almarai font variable
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}