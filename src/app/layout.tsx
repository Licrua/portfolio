

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata } from "next";
import sen from "../../public/fonts/sen";
import "./styles/reset.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "LictuaPortfolio",
  description: "website represents porftolio with works, experiance and main stack ",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sen.className}`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
