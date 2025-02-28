"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion"; // Добавляем
import styles from "@/app/styles/componentStyles/headerNav.module.css";

export function HeaderNav() {
  const t = useTranslations("translation.nav");
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

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
        ref={burgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Десктоп-меню */}
	  <motion.ul
  className={styles.list}
  initial={{ opacity: 0, y: -10 }} // Меню появляется сверху
  animate={{ opacity: 1, y: 0 }} // Анимация появления
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {t
    .raw("items")
    .map(({ href, label, active }: { href: string; label: string; active?: boolean }, index: number) => (
      <motion.li
        key={href}
        className={styles.item}
        initial={{ opacity: 0, y: -10 }} // Каждый пункт падает сверху
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: index * 0.1 }} // Задержка для плавности
        whileHover={{ scale: 1.1 }} // Эффект увеличения при наведении
      >
        <a className={`${styles.link} ${active ? styles.active : ""}`} href={href}>
          {label}
        </a>
      </motion.li>
    ))}
</motion.ul>

     
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileMenu}
            ref={menuRef}
            initial={{ scale: 0.9, opacity: 0 }} // Начальное состояние
            animate={{ scale: 1, opacity: 1 }} // Анимация появления
            exit={{ scale: 0.9, opacity: 0 }} // Анимация исчезновения
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {t
              .raw("items")
              .map(({ href, label, active }: { href: string; label: string; active?: boolean }, index: number) => (
                <motion.li
                  key={href}
                  className={styles.item}
                  initial={{ opacity: 0, y: -10 }} // Элементы падают сверху
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }} // Задержка между элементами
                >
                  <a
                    className={`${styles.link} ${active ? styles.active : ""}`}
                    href={href}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
