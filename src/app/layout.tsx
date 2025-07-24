import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

// You can define metadata here, similar to your <head> content
export const metadata: Metadata = {
  title: "Rick's Website", 
  description: 'Personal website for Rick W.', 
  icons: {
    icon: '/images/canon_a1_2_round.png', 
  },
  other: {
    'bsky:app-url': 'https://bsky.app/profile/lasaj.bsky.social', // Your Bluesky verification tag
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Header /> {/* Render your Header component */}
          <main className="site-main">
            {children} {/* This prop renders the content of your pages (e.g., page.tsx) */}
          </main>
          <Footer /> {/* Render your Footer component */}
        </body>
      </ThemeProvider>
    </html>
  );
}