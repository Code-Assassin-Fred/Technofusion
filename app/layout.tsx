import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solvix",
  description: "AI-inspired design with a teal-on-black theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
