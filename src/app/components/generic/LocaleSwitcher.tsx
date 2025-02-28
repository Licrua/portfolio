
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/componentStyles/header/localeSwitcher.module.css";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    setIsOpen(false); // Закрываем меню после выбора
    router.refresh();
  };

  return (
    <div className={styles.switcher}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <Image src="/images/language.png" alt="Language" width={40} height={40} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <button onClick={() => switchLanguage("ru")}>🇷🇺 Русский</button>
          <button onClick={() => switchLanguage("en")}>🇺🇸 English</button>
        </div>
      )}
    </div>
  );
}
