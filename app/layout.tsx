import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CoffeeBeansBackground from "@/components/CoffeeBeansBackground";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Colibri Cafe | Specialty Coffee in Nicosia",
  description:
    "Experience specialty coffee with soul at Green Colibri Cafe in Nicosia, Cyprus. Sustainable, ethically sourced coffee and wholesome food in a warm, welcoming environment.",
  icons: {
    icon: "/greenColBird.png",
    shortcut: "/greenColBird.png",
    apple: "/greenColBird.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🌿 Scrollable wrapper */}
          <div className="relative w-full min-h-screen">
            {/* 🌱 Coffee Beans Background */}
            

            {/* 🌼 Main content above */}
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
