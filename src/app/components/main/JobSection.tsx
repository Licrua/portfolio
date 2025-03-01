"use client";
import styles from "@/app/styles/componentStyles/main/jobSection.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { letterVariants, techVariants } from "@/utils/motionVariants";
import Jobs from "@/types/jobs";
import JobList from "./JobList";
import JobSubtitle from "./JobSubtitle";
import JobTitle from "./JobTitle";

function JobSection() {
  const t = useTranslations("translation.jobSection");
  const jobs = useTranslations("translation");
  console.log("dasda", jobs.raw("jobs"));

  return (
    <section className={styles.jobSection}>
      <div id="exp" className={styles.header}>
        {/* Заголовок с анимацией букв */}

        <JobTitle t={t} />

        {/* Подзаголовок с анимацией букв */}
        <JobSubtitle t={t} />
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
            <JobList jobs={job} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default JobSection;
