"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/componentStyles/skills.module.scss";

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
  "Firebase",
];

export default function Skills() {
  return (
	<div>
		<h2 className={styles.header}>Основной стек</h2>
    <section className={styles.container}>
      <motion.div
        className={styles.circle}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI; // Вычисляем угол
          const x = Math.cos(angle) * 100; // X-координата
          const y = Math.sin(angle) * 100; // Y-координата

          return (
            <motion.div
              key={skill}
              className={styles.skill}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              whileHover={{ scale: 1.2 }}
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
