import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// H1 / main titles — epic, angular (Undertale-style, Vietnamese-localized)
const determination = localFont({
  src: "./fonts/SVN-Determination-Sans.ttf",
  variable: "--font-title",
  display: "swap",
});

// H2 / H3 sub-headings — compact pixel font with full Vietnamese
const lanaPixel = localFont({
  src: "./fonts/LanaPixel.ttf",
  variable: "--font-pixel",
  display: "swap",
});

// Body text — SVN-Coder's Crux (pixel coding font, full Vietnamese)
const codersCrux = localFont({
  src: "./fonts/SVN-Coders-Crux.ttf",
  variable: "--font-vt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LÊ HẢI LONG · Creative Quest",
  description:
    "Portfolio 8-bit của Lê Hải Long — Video Editor & Creative tại CR Studio. Bấm START GAME để bắt đầu.",
  icons: {
    icon: "/team-3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${determination.variable} ${lanaPixel.variable} ${codersCrux.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
