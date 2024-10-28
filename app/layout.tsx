import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Clouden's Calculator",
  description:
    "Calculator made for Terminus Black Ops 6 Cod Zombies by Clouden to skip spending 5k on EE (easter egg steps)",
  keywords: [
    "Calculator",
    "Terminus",
    "Black Ops 6",
    "COD Zombies",
    "Easter Egg",
    "Clouden",
  ],
  openGraph: {
    title: "Clouden's Calculator",
    description:
      "Calculator made for Terminus Black Ops 6 Cod Zombies by Clouden to skip spending 5k on EE (easter egg steps)",
    type: "website",
  },
  verification: {
    google: "BX7a0tYmhgyeq0u0qc7FXvu-kGUH_e3JVkC0dkwl7vs",
  },
  metadataBase: new URL("https://zombies-tools.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <head>
          <meta
            name="google-site-verification"
            content="BX7a0tYmhgyeq0u0qc7FXvu-kGUH_e3JVkC0dkwl7vs"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
