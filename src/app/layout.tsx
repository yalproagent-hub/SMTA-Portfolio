import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'SMTA Portfolio | Mohamed Thameem Ansari',
  description: 'AI Automation Specialist & Web Development Expert. I build n8n workflows, AI voice agents, WhatsApp automation, and production websites. Based in Madurai, India.',
  keywords: 'AI automation, n8n workflows, WhatsApp AI agent, Go High Level, web development, freelance automation expert, Madurai',
  openGraph: {
    title: 'SMTA – AI Automation & Web Development Portfolio',
    description: 'Custom AI automations, n8n workflows, voice agents, and production websites by Mohamed Thameem Ansari.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-inter text-text bg-background min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
