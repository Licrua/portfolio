"use client";
import styles from "@/app/styles/componentStyles/main/worksSection.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { letterVariants, cardVariants, techVariants } from "@/utils/motionVariants";


function WorksSection() {
  const t = useTranslations("translation.worksSection");
  const projects = useTranslations("translation");


  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        {/* Анимированные заголовки */}
        <motion.h2 
          className={styles.header} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {t("title").split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.h3 
          className={styles.projects} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {t("projects").split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h3>
      </div>

      {/* Анимированные карточки проектов */}
      <motion.div 
        className={styles.worksGrid} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        {projects.raw("projects").map((project: any, index: number) => (
          <motion.div 
            key={index} 
            className={styles.card} 
            custom={index} 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <img className={styles.image} src={project.image} alt={project.name} />
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>

            {/* Анимированный стек технологий */}
            <div className={styles.stack}>
              {project.stack.map((tech: string, i: number) => (
                <motion.span 
                  key={tech} 
                  className={styles.tech} 
                  custom={i} 
                  variants={techVariants} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                >
                  {tech}
                  {i < project.stack.length - 1 && ", "}
                </motion.span>
              ))}
            </div>

            <Link href={project.life} className={styles.viewInfo}>
              {t("demo")}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorksSection;
