import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Figtree} from 'next/font/google'
import Sidebar from "../components/Sidebar";

const font = Figtree({subsets: ['latin']})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to Music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${children} antialiased`}
      >
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
