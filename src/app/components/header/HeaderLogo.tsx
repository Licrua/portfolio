"use client";

import styles from "@/app/styles/componentStyles/header/headerLogo.module.css";
import { motion } from "framer-motion";

function HeaderLogo() {
  return (
    <motion.div
      className={styles.logoContainer}
      initial={{ opacity: 0, backgroundColor: "transparent" }}
      animate={{
        opacity: 1,
        backgroundColor: ["#5221E6", "#6A30E6", "#5221E6"], 
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} 
    >
      <motion.img
        className={styles.logoImage}
        src="/images/logo.png"
        alt="logo"
        whileInView={{
          scale: 1,
          skew: [0, 8, -8, 4, -4, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        viewport={{ once: true }} // Анимация сработает один раз при попадании в область видимости
      />
    </motion.div>
  );
}

export default HeaderLogo;
