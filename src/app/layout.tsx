import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Playfair Display: approved fallback for Cormorant Garant (per Brand Brief)
const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Inter: clean humanist sans, closest free substitute for Neue Haas Grotesk
const inter = Inter({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shalom Bayit | Jerusalem Property Management",
  description:
    "Premium property management for North American homeowners in Jerusalem. Boutique, transparent, and built on genuine local expertise.",
  openGraph: {
    title: "Shalom Bayit | Jerusalem Property Management",
    description:
      "Your Jerusalem home, cared for like our own. Boutique property management for North American owners.",
    siteName: "Shalom Bayit Property Management",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
