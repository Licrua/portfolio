"use client";
import styles from "@/app/styles/componentStyles/main/jobSection.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { letterVariants, techVariants } from "@/utils/motionVariants";
import Jobs from "@/types/jobs";

function JobSection() {
  const t = useTranslations("translation.jobSection");
  const jobs = useTranslations("translation");

  return (
    <section className={styles.jobSection}>
      <div id="exp" className={styles.header}>
        {/* Заголовок с анимацией букв */}
        <motion.h2
          className={styles.title}
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

        {/* Подзаголовок с анимацией букв */}
        <motion.p
          className={styles.subtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t("subtitle")
            .split("")
            .map((char, index) => (
              <motion.span key={index} custom={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
        </motion.p>
      </div>

      {/* Карточки с опытом работы */}
      <motion.div
        className={styles.jobs}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {jobs.raw("jobs").map((job: Jobs, index: number) => (
          <motion.div
            key={job.id}
            className={styles.job}
            custom={index}
            variants={techVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.index}>{job.id}</div>
            <div className={styles.info}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.position}>{job.position}</p>
            </div>

            {/* Анимированные элементы списка задач */}
            <ul className={styles.tasks}>
              {job.tasks.map((task: string, taskIndex: number) => (
                <motion.li
                  key={taskIndex}
                  custom={taskIndex}
                  variants={techVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default JobSection;
