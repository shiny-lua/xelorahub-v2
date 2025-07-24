import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Chat } from "@/components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "XELORAHUB - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
  description: "XELORAHUB is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, XELORAHUB Technologies",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org",
    title: "XELORAHUB - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
    description: "XELORAHUB is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org",
    title: "XELORAHUB - Innovative Tech Agency | 3D Web, Blockchain, AI & Mobile Development",
    description: "XELORAHUB is a leading tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Transform your business with our innovative digital solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Chat /> */}
      </body>
    </html>
  );
}
