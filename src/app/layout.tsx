import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ares Vida",
  description: "Ares Vida - Site Institucional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
