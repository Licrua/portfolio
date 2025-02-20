import styles from "@/styles/componentStyles/headerLogo.module.css";

export function HeaderLogo() {
  return (
    <a className={styles.logo} href="/">
      <img className={styles.logoImage} src="/images/logo.png" alt="logo" />
    </a>
  );
}
