import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";
import "./prism.css";

import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
};

const icons = {
  icon: "favicon.ico",
};

export const metadata: Metadata = {
  title: "Petar Mircheski",
  description: "",
  keywords: ["blog", "academia", "music", "adventure"],
  authors: [{ name: "Petar Mircheski" }],
  creator: "Petar Mircheski",
  publisher: "Petar Mircheski",
  icons: icons,
  robots: robots,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <div className="flex flex-col gap-6 pt-24">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
