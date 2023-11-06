import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "./(main)/Header/Header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dict App",
  description: "Created by TimGub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
