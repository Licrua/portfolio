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
        <img src="/images/portfolio-Photoroom.png" alt="heroImage" className={styles.heroImage} />
      </div>
      <motion.img
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          rotate: [0, -1, 1, -1, 1, 0],
          filter: ["brightness(50%) contrast(60%)", "brightness(150%) contrast(250%)"],
          transition: { repeat: Infinity, duration: 1 },
        }}
        className={styles.lamp}
        src="/images/light bulb.svg"
        alt="lamp"
      />
      <div className={styles.textContainer}>
        <motion.h1 className={styles.title} initial="hidden" animate="visible">
          {title.split("").map((char, index) => (
            <motion.span
              style={index === title.length - 1 ? { color: "red", textTransform: "uppercase" } : {}}
              key={index}
              custom={index}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Анимированный текст */}
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
