import styles from "./styles/componentStyles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a className={styles.logo} href="">
          <img className={styles.logoImage} src="/images/logo.png" alt="logo" />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/exp">
                Опыт
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/works">
                Работы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/achievements">
                Награды
              </a>
            </li>
            <li className={styles.item}>
              <a className={`${styles.link} ${styles.active}`} href="/contact">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
