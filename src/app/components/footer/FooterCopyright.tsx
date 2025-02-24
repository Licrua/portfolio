import styles from "@/app/styles/componentStyles/footerCopyright.module.scss";
function FooterCopyright() {
  return (
    <p className={styles.copyRight}>Права © {new Date().getFullYear()} - Все права защищены</p>
  );
}

export default FooterCopyright;
