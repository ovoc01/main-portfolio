import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Portfolio - rzmirindra",
  description:
    "A beautiful portfolio template built with Shadcn UI, Tailwind CSS 4, and Next.js 15",
  icons: [
    {
      rel: "icon",
      url: "/svgviewer-output.svg",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased
        bg-black
      `}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
