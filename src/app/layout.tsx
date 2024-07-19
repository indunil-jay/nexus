import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Allerta_Stencil } from "next/font/google";
import { clsx } from "clsx";
import "../styles/globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
});
const AllertaStencil = Allerta_Stencil({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-AllertaStencil",
});

export const metadata: Metadata = {
  title: "Nexus",
  description:
    "Revolutionize your workfolow with nexus task management software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          workSans.className,
          "antialiased text-dark-950",
          AllertaStencil.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
