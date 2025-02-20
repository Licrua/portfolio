import styles from "@/app/styles/componentStyles/headerLogo.module.css";

export function HeaderLogo() {
  return (
    <a  href="/">
      <img className={styles.logoImage} src="/images/logo.png" alt="logo" />
    </a>
  );
}
