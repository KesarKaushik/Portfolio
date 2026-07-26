import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Kesar Kaushik | Developer Portfolio",
  description:
    "Portfolio of Kesar Kaushik - Frontend Developer, Python Developer and B.Tech CSE Student. Building modern, responsive applications that solve real-world problems.",
  keywords: [
    "Kesar Kaushik",
    "Frontend Developer",
    "Python Developer",
    "Portfolio",
    "B.Tech CSE",
    "Next.js",
    "React",
    "Web Developer",
  ],
  authors: [{ name: "Kesar Kaushik" }],
  creator: "Kesar Kaushik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kesarkaushik.github.io/portfolio",
    siteName: "Kesar Kaushik Portfolio",
    title: "Kesar Kaushik | Developer Portfolio",
    description:
      "Frontend Developer, Python Developer and B.Tech CSE Student. Building modern, responsive applications.",
    images: [
      {
        url: "/assets/images/profile.jpg",
        width: 400,
        height: 400,
        alt: "Kesar Kaushik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesar Kaushik | Developer Portfolio",
    description:
      "Frontend Developer, Python Developer and B.Tech CSE Student.",
    images: ["/assets/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
