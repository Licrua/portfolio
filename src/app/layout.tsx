import type { Metadata } from "next";
import "./styles/globals.css";
import sen from "../../public/fonts/sen";
import "./styles/reset.css"


export const metadata: Metadata = {
  title: "LictuaPortfolio",
  description: "website represents porftolio with works, experiance and main stack ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className}`}>
        {children}
      </body>
    </html>
  );
}
