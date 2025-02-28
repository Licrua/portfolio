import styles from "@/app/styles/componentStyles/footer/footerSlogan.module.css";
import { useTranslations } from "next-intl";
function FooterSlogan() {
	  const t = useTranslations("translation");
  return (
    <blockquote className={styles.quote}>
		{t('footer.slogan')}
    </blockquote>
  );
}

export default FooterSlogan;
