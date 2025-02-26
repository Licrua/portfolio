import { useTranslations } from "next-intl";
import styles from "@/app/styles/componentStyles/headerNav.module.css";

export function HeaderNav() {
  const t = useTranslations("translation.nav");

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {t.raw("items").map(({ href, label, active }: { href: string; label: string; active?: boolean }) => (
          <li key={href} className={styles.item}>
            <a
              className={`${styles.link} ${active ? styles.active : ""}`}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
