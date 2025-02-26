import styles from "@/app/styles/componentStyles/heroSection.module.css";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("translation.heroSection");
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img src="/images/portfolio-Photoroom.png" alt="heroImage" className={styles.heroImage} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description")}</p>
      </div>
    </section>
  );
}

export default HeroSection;
