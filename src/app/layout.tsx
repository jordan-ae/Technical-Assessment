import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
})

export const metadata: Metadata = {
  title: "Best Casinos",
  description: "Visit the Best Casino 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
