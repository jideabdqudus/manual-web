import "./globals.css";
import { ttnorms } from "@/src/app/fonts/custom";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttnorms.variable} antialiased`}>{children}</body>
    </html>
  );
}
