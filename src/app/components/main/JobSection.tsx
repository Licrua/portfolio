import styles from "@/app/styles/componentStyles/jobSection.module.css";
import { useTranslations } from "next-intl";

function JobSection() {
  const t = useTranslations("translation.jobSection");
  const jobs = useTranslations("translation");

  

  return (
    <section className={styles.jobSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
      <div className={styles.jobs}>
        {jobs.raw("jobs").map((job: any) => (
          <div key={job.id} className={styles.job}>
            <div className={styles.index}>{job.id}</div>
            <div className={styles.info}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.position}>{job.position}</p>
            </div>
            <ul className={styles.tasks}>
              {job.tasks.map((task: string, index: number) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobSection;
