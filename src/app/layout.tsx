import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SparklesPreview } from "@/components/ui/SparklesPreview";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixi MGMT",
  description: "Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
     
     
      </body>
    </html>
  );
}
