import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://external-insulation-dublin-dublin-2.vercel.app"),
  title: {
    default: "External Insulation Dublin | SEAI Approved EWI Contractors",
    template: "%s | External Insulation Dublin",
  },
  description:
    "External Insulation Dublin installs SEAI-approved external wall insulation across Dublin. Cut bills, qualify for grants. Free quotes — call +35312308892.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body text-on-surface-variant">
        {children}
      </body>
    </html>
  );
}
