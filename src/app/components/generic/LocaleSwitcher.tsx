// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import styles from "@/app/styles/componentStyles/localeSwitcher.module.css";

// export default function LocaleSwitcher() {
//   const router = useRouter();
//   const [language, setLanguage] = useState<string>("ru"); // Состояние для языка

//   const switchLanguage = (locale: string) => {
//     setLanguage(locale);
//     document.cookie = `locale=${locale}; path=/`; // Сохраняем язык в cookies
//     router.refresh(); // Перезагружаем страницу для применения изменений
//   };

//   return (
//     <div className={styles.switcher}>
//       <span className={styles.label}>Choose Language:</span>
//       <div className={styles.buttons}>
//         <button
//           className={`${styles.button} ${language === "ru" ? styles.active : ""}`}
//           onClick={() => switchLanguage("ru")}
//         >
//           Русский
//         </button>
//         <button
//           className={`${styles.button} ${language === "en" ? styles.active : ""}`}
//           onClick={() => switchLanguage("en")}
//         >
//           English
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/componentStyles/localeSwitcher.module.css";
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
