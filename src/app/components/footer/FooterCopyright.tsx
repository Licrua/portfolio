import styles from "@/app/styles/componentStyles/footer/footerCopyright.module.css";
import { useTranslations } from "next-intl";
function FooterCopyright() {
  const t = useTranslations("translation");
  return <p className={styles.copyRight}>{t("footer.copyright")}</p>;
}

export default FooterCopyright;
