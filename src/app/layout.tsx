import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Probir Sarkar - Full Stack Developer",
  description:
    "Explore the expertise of Probir Sarkar, an accomplished Full Stack Developer with a focus on Next.js. With a wealth of experience, I bring a proven track record of creating robust and dynamic web applications. Dive into my portfolio to witness the seamless integration of front-end and back-end technologies, showcasing a commitment to excellence in every project. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#040621]`}>
        <main className="text-white ">{children}</main>
      </body>
    </html>
  );
}
