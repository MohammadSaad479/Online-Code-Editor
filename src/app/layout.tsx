import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Code Craft",
  description: "Share and run code snippets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col">
        {/* ✅ ClerkProvider MUST be inside html/body */}
        <ClerkProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Footer />
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}

// https://emkc.org/api/v2/piston/runtimes
