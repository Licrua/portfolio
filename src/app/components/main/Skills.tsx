"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/app/styles/componentStyles/skills.module.scss";
import { useTranslations } from "next-intl";

const skills = [
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "React",
  "Next.js",
  "Zustand",
  "Tailwind",
  "SCSS",
  "Framer Motion",
  "Redux",
];

export default function Skills() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const t = useTranslations("translation.myStack");

  useEffect(() => {
    const newPositions = skills.map((_, index) => {
      const angle = (index / skills.length) * 2 * Math.PI; // Вычисляем угол
      const x = Math.cos(angle) * 150; // X-координата
      const y = Math.sin(angle) * 100; // Y-координата
      return { x, y };
    });
    setPositions(newPositions);
  }, []);

  return (
    <div id="skills">
      <h2 className={styles.header}>{t("title")}</h2>
      <section className={styles.container}>
        <motion.div
          className={styles.circle}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {skills.map((skill, index) => {
            const { x, y } = positions[index] || { x: 0, y: 0 }; // Используем позицию из состояния

            return (
              <motion.div
                key={skill}
                className={styles.skill}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
