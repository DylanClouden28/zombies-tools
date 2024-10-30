import type { Metadata } from "next";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Clouden's Terminus Beamsmasher Calculator, Call of Duty Black ops 6",
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
    title:
      "Terminus Beamsmasher Calculator by Clouden, Call of Duty Black ops 6",
    description:
      "Terminus Calculator made for Beam Smasher on Terminus Black Ops 6 Cod Zombies by Clouden to skip spending 5k on EE (easter egg steps)",
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
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body className={`antialiased`}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
