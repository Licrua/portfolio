"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/componentStyles/general/button.module.css";
import { backgroundVariant, firstTextVariant, secondTextVariant } from "@/utils/motionVariants";

interface ButtonProps {
  children: string;
  onClick: () => void;
}


export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.button
	onClick={onClick}
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={backgroundVariant}
      className={styles.button}
    >
      <div className={styles.textContainer}>
        <motion.p variants={firstTextVariant} className={styles.firstText}>
          {children}
        </motion.p>
        <motion.p variants={secondTextVariant} aria-hidden className={styles.secondText}>
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};
