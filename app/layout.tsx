import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technofusion",
  description: "Built with a luminous teal theme",
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
