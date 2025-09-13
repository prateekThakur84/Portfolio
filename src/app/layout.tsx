import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "./ClientLayout"; // 👈 import client wrapper

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Prateek Thakur",
  description: "Prateek Thakur's portfolio site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ backgroundColor: "#121212" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
