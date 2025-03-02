
"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/componentStyles/main/greeting.module.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LocaleSwitcher from "../generic/LocaleSwitcher";
import { Button } from "../generic/Button";

export default function Greeting({ onClick }: { onClick: () => void }) {
  const t = useTranslations();

  const title = t("translation.greeting.title");
  const subtitle = t("translation.greeting.subtitle");
  const instruction = t("translation.greeting.instruction");
  const proceed = t("translation.greeting.proceed");

  const [isTitleVisible, setIsTitleVisible] = useState(true);
  console.log(isTitleVisible);

  return (
    <div className={styles.container}>
      {isTitleVisible && (
        <>
          <motion.h1
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {subtitle.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <LocaleSwitcher />
          <Button onClick={() => setIsTitleVisible(false)}>{proceed}</Button>
        </>
      )}

      {!isTitleVisible && (
        <>
          <motion.img
            onClick={onClick}
            whileTap={{
              x: [0, -2, 2, -2, 2, 0],
              rotate: [0, -1, 1, -1, 1, 0],
              filter: ["brightness(50%) contrast(60%)", "brightness(150%) contrast(250%)"],
              transition: { repeat: Infinity, duration: 0.5, repeatType: "loop" },
            }}
            className={styles.lamp}
            src="/images/light bulb.svg"
            alt="lamp"
            initial={{
              opacity: 0,
              filter: ["brightness(50%) contrast(60%)", "brightness(40%) contrast(100%)"],
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          />
          <motion.p
            className={styles.instruction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {instruction}
          </motion.p>
        </>
      )}
    </div>
  );
}
