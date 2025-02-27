"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/componentStyles/headerNav.module.css";

export function HeaderNav() {
  const t = useTranslations("translation.nav");
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("event", menuRef.current);

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Закрываем меню
      }
    };

    // Добавляем обработчик событий
    document.addEventListener("mousedown", handleClickOutside);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {/* Бургер-иконка */}
      <div
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        ref={burgerRef} // Привязываем к бургер-иконке
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Десктоп-меню */}
      <ul className={styles.list}>
        {t
          .raw("items")
          .map(({ href, label, active }: { href: string; label: string; active?: boolean }) => (
            <li key={href} className={styles.item}>
              <a className={`${styles.link} ${active ? styles.active : ""}`} href={href}>
                {label}
              </a>
            </li>
          ))}
      </ul>

      {/* Мобильное меню */}
      {isOpen && (
        <ul className={styles.mobileMenu} ref={menuRef}>
          {" "}
          {t
            .raw("items")
            .map(({ href, label, active }: { href: string; label: string; active?: boolean }) => (
              <li key={href} className={styles.item}>
                <a
                  className={`${styles.link} ${active ? styles.active : ""}`}
                  href={href}
                  onClick={() => setIsOpen(false)} // Закрываем меню при клике
                >
                  {label}
                </a>
              </li>
            ))}
        </ul>
      )}
    </nav>
  );
}
