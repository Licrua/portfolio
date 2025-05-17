"use client";
import styles from "@/app/styles/componentStyles/main/worksSection.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { letterVariants, cardVariants, techVariants } from "@/utils/motionVariants";
import { useState } from "react";

function WorksSection() {
  const t = useTranslations("translation.worksSection");
  const projects = useTranslations("translation");
  // Пагинация
  const projectsPerPage = 3;
  const allProjects = projects.raw("projects");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIdx = (currentPage - 1) * projectsPerPage;
  const endIdx = startIdx + projectsPerPage;
  const currentProjects = allProjects.slice(startIdx, endIdx);

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
          {t("title")
            .split("")
            .map((char, index) => (
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
          {t("projects")
            .split("")
            .map((char, index) => (
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
        {currentProjects.map((project: any, index: number) => (
          <motion.div
            key={index}
            className={styles.card}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className={styles.image + (currentPage === 2 ? " " + styles.largeImage : "")}
              src={project.image}
              alt={project.name}
            />
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
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

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.life}
              className={styles.viewInfo}
            >
              {t("demo")}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {/* Пагинация */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={styles.pageButton + " " + (currentPage === 1 ? styles.disabled : "")}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={styles.pageButton + " " + (currentPage === i + 1 ? styles.activePage : "")}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={styles.pageButton + " " + (currentPage === totalPages ? styles.disabled : "")}
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

export default WorksSection;
