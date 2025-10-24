import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "@/context/authContext"; // <- import AuthProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rey Restu-Profile Web",
  description:
    "Hi, I'm Rai Restu Pama — a Junior Full-Stack Web Developer who loves building clean, responsive, and dynamic web experiences.",
  icons: {
    icon: "/miniLogos.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider> {/* <-- Bungkus semua komponen yang pakai useAuth */}
          <div className="min-h-screen">
            <Navigation />
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
