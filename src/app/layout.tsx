import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotionViz - Chart maker",
  description: "Chart maker based on Notion database ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
