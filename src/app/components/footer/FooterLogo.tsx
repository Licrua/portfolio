"use client";
import styles from "@/app/styles/componentStyles/footer/footerLogo.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function FooterLogo() {
  return (
    <motion.div
      className={styles.container}
      whileInView={{
        opacity: 1,
        y: 0,
		rotate: 360
      }}
      initial={{ opacity: 0, y: 20, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut"}}
      viewport={{ once: true }} 
    >
      <Image
        className={styles.img}
        width={200}
        height={200}
        src="/images/footer/footerLogo.webp"
        alt="footerLogo"
      />
    </motion.div>
  );
}

export default FooterLogo;
