import styles from "@/app/styles/componentStyles/worksSection.module.css";
import projects from "@/data/worksItems";
import Link from "next/link";

function WorksSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
			<h2 className={styles.header}>Работы</h2>
			<h3 className={styles.projects}>Мои проекты</h3>
			</div>
			<div className={styles.worksGrid}>
				{projects.map((project, index) => (
					<div key={index} className={styles.card}>
						<img className={styles.image} src={project.image} alt={project.name} />
						<h3 className={styles.title}>{project.name}</h3>
						<p className={styles.description}>{project.description}</p>
						<div className={styles.stack}>
							{project.stack.map((tech,i) => (
								<span key={tech} className={styles.tech}>
									{tech}
									 {i < project.stack.length - 1 && ", "}
								</span>
							))}
						</div>
						<Link href={project.life} className={styles.viewInfo}>Демонстрация</Link>
					</div>
				))}
			</div>
			
		</section>
	);
}

export default WorksSection;
