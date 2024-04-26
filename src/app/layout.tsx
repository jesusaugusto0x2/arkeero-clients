import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./layout.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arkeero Clients",
  description: "Check the sample management of the Arkeero clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
