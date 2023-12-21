import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { chillax, satoshi } from "@/font/font";

export const metadata: Metadata = {
  title: "Shadow Garden",
  description: 'best site to watch "The Eminence In Shadow"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          chillax.variable,
          satoshi.variable
        )}
      >
        <Navbar />
        {/* Add max width */}
        <div className="max-w-[2000px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
