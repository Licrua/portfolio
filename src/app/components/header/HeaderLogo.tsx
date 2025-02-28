"use client";

import styles from "@/app/styles/componentStyles/headerLogo.module.css";
import { motion } from "framer-motion";

function HeaderLogo() {
  return (
    <motion.div
      className={styles.logoContainer}
      initial={{ opacity: 0, backgroundColor: "transparent" }}
      animate={{
        opacity: 1,
        backgroundColor: ["#5221E6", "#6A30E6", "#5221E6"], // Изменение цвета
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Бесконечное мигание
    >
      <motion.img
        className={styles.logoImage}
        src="/images/logo.png"
        alt="logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default HeaderLogo;
