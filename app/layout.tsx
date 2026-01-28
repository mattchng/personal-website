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
        className={`${roboto.className} bg-gray-50 relative
        min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 
        flex justify-center sm:mx-24`}>
        <div className="bg-[#fff3f3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#f8f7ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {children}
      </body>
    </html>
  );
}
