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

export const metadata = {
  title: "Artic-js",
  description: "Artic-js is simple web aplication to deploy yours articles.",
  keywords: "Articles, Web Articles Application, Web project, IT",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body 
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
