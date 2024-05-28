import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "../styles/fonts";
import React from "react";
import { NextUIProviders } from "@/app/Providers";

export const metadata: Metadata = {
  title: "Probir Sarkar - Full Stack Developer",
  description:
    "Explore the expertise of Probir Sarkar, an accomplished Full Stack Developer with a focus on Next.js. With a wealth of experience, I bring a proven track record of creating robust and dynamic web applications. Dive into my portfolio to witness the seamless integration of front-end and back-end technologies, showcasing a commitment to excellence in every project. ",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Probir Sarkar - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-secondary`}>
        <NextUIProviders>
          <main className="text-white ">{children}</main>
        </NextUIProviders>
      </body>
    </html>
  );
}
