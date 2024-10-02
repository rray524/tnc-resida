import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { ToastProvider } from "@/context/toast-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TNC Resida | Homepage",
  description: "Latest template on real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
