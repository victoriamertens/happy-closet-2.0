import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Closet",
  description: "Version 2.0 - Redesign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main
            id="main"
            className=" flex h-screen items-center justify-center bg-teal-100/100"
          >
            <div
              id="cardwrapper"
              className="min-w-96 m-5 flex flex-col items-center justify-center rounded-xl border bg-white p-5 shadow-2xl"
            >
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
