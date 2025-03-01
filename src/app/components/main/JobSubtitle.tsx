import styles from "@/app/styles/componentStyles/main/jobSection.module.css";
import { letterVariants } from "@/utils/motionVariants";
import { motion } from "framer-motion";

function JobSubtitle({ t }: { t: any }) {
  return (
    <motion.p
      className={styles.subtitle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {t("subtitle")
        .split("")
        .map((char: string, index: number) => (
          <motion.span key={index} custom={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
    </motion.p>
  );
}

export default JobSubtitle;
