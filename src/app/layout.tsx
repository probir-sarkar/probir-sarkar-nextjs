import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Probir Sarkar - Full Stack Developer",
  description:
    "Explore the expertise of Probir Sarkar, an accomplished Full Stack Developer with a focus on Next.js. With a wealth of experience, I bring a proven track record of creating robust and dynamic web applications. Dive into my portfolio to witness the seamless integration of front-end and back-end technologies, showcasing a commitment to excellence in every project. ",
  openGraph: {
    images: [
      {
        url: "https://ik.imagekit.io/probir/probirsarkar.com/og-image.jpg?updatedAt=1716879552254",
        width: 1200,
        height: 630,
        alt: "Probir Sarkar - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${dmSans.variable} antialiased bg-secondary`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
