import styles from "@/app/styles/componentStyles/worksSection.module.css";
import { Projects } from "@/types/projects";
import { useTranslations } from "next-intl";
import Link from "next/link";

function WorksSection() {
  const t = useTranslations("translation.worksSection");
  const projects = useTranslations("translation"); // Гарантируем, что `projects` всегда массив
	
  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>{t("title")}</h2>
        <h3 className={styles.projects}>{t("projects")}</h3>
      </div>
      <div className={styles.worksGrid}>
        {projects.raw('projects').map((project: any, index: number) => (
          <div key={index} className={styles.card}>
            <img className={styles.image} src={project.image} alt={project.name} />
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech: string, i: number) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                  {i < project.stack.length - 1 && ", "}
                </span>
              ))}
            </div>
            <Link href={project.life} className={styles.viewInfo}>{t("demo")}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorksSection;
