import styles from "@/app/styles/componentStyles/main/jobSection.module.css";
import { letterVariants } from "@/utils/motionVariants";
import { motion } from "framer-motion";
function JobTitle({ t }: { t: any }) {
  return (
    <motion.h2
      className={styles.title}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {t("title")
        .split("")
        .map((char: string, index: number) => (
          <motion.span key={index} custom={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
    </motion.h2>
  );
}

export default JobTitle;
