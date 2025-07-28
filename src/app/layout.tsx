import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raghavendra Bhat | Software Engineer",
  description:
    "Software Engineer with experience in frontend, mobile, backend, and cloud-native applications developments",
  keywords: [
    "Raghavendra Bhat",
    "Software Engineer",
    "AI Developer",

    "Agentic AI",
    "Next.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Raghavendra Bhat" }],
  creator: "Raghavendra Bhat",
  openGraph: {
    title: "Raghavendra Bhat | Software Engineer",
    description:
      "Experienced in full-stack development and AI-driven cloud-native architectures like RAG and MCP.",
    url: "https://raghavendrabhat.com",
    siteName: "Raghavendra Bhat Portfolio",

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main className="px-4 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
