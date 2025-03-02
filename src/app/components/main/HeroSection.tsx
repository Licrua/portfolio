"use client";
import styles from "@/app/styles/componentStyles/main/heroSection.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { letterVariants } from "@/utils/motionVariants";

function HeroSection() {
  const t = useTranslations("translation.heroSection");

  const title = t("title");
  const description = t("description");

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          src="/images/portfolio-Photoroom.png"
          alt="heroImage"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.textContainer}>
        <motion.h1 className={styles.title} initial="hidden" animate="visible">
          {title.split("").map((char, index) => (
            <motion.span
              style={
                index === title.length - 1 ? { color: "red", textTransform: "uppercase" } : {}
              }
              key={index}
              custom={index}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p className={styles.description} initial="hidden" animate="visible">
          {description.split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
