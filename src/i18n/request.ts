import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale =  (await cookieStore).get("locale")?.value || "en"; // Берем язык из cookies или ставим "en" по умолчанию

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}.json`)).default,
    // messages: (await import(`../../public/messages/${locale}.json`)).default,
  };
});

