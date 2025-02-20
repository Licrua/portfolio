import navItems from "@/data/navItems";
import styles from "@/app/styles/componentStyles/headerNav.module.css";

export function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map(({ href, label, active }) => (
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
