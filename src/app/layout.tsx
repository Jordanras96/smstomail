import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMS to Mail - Transférez vos SMS vers Gmail",
  description: "Application Android qui transfère automatiquement vos SMS importants vers votre boîte mail Gmail. Simple, sécurisé et respectueux de votre vie privée.",
  keywords: ["SMS", "Gmail", "Android", "transfert", "sauvegarde", "sécurisé", "gratuit", "open source"],
  authors: [{ name: "SMS to Mail" }],
  creator: "SMS to Mail",
  publisher: "SMS to Mail",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://smstomail.vercel.app/",
    siteName: "SMS to Mail",
    title: "SMS to Mail - Transférez vos SMS vers Gmail",
    description: "Application Android qui transfère automatiquement vos SMS importants vers votre boîte mail Gmail. Simple, sécurisé et respectueux de votre vie privée.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMS to Mail - Transférez vos SMS vers Gmail",
    description: "Application Android qui transfère automatiquement vos SMS importants vers votre boîte mail Gmail.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
