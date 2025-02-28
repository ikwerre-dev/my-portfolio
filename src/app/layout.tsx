import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'Robinson Honour | Creative Software Engineer',
  description: 'Creative Software Engineer with 6+ years of experience, specializing in web development, app development, robotics, cloud computing, and game development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Robotics', 'Cloud Computing', 'Game Development', 'Full Stack Developer', 'Robinson Honour'],
  authors: [{ name: 'Robinson Honour' }],
  creator: 'Robinson Honour',
  publisher: 'Robinson Honour',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robinsonhonour.me.',
    siteName: 'Robinson Honour Portfolio',
    title: 'Robinson Honour | Creative Software Engineer',
    description: 'Creative Software Engineer specializing in web development, app development, robotics, and cloud computing. Building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Robinson Honour - Creative Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robinson Honour | Creative Software Engineer',
    description: 'Creative Software Engineer building scalable products with great user experiences.',
    creator: '@honour_can_code',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
