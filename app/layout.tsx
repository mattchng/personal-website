import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Matthew Cheng",
  description: "matthew's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24`}>
        {children}
      </body>
    </html>
  );
}
