import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | DevPro Hub',
    default: 'DevPro Hub',
  },
  description: 'Owned By CodeCipher_Virendra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main></body>
    </html>
  );
}
