import "./globals.css";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "America250 | One Nation Under God",
  description:
    "A faith-centered tribute commemorating America’s 250th birthday through history, freedom, honor, and hope in God Almighty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} bg-[#020617] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
