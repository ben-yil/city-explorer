import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ottonova-Case",
  description: "Developed by Ben Yilmaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-[#FEF8EE]  antialiased", work_sans.className)}
    >
      <body className="min-h-screen bg-[#FBEBE1] dark:bg-slate-900 antialiased pb-20 pt-28">
        <Navbar />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
