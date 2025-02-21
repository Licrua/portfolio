import jobs from "@/data/jobItems";
import styles from "@/app/styles/componentStyles/jobSection.module.css";

function JobSection() {
	return (
		<section className={styles.jobSection}>
			<div className={styles.header}>
				<h2 className={styles.title}>Опыт работы</h2>
				<p className={styles.subtitle}>Компании, где я работал</p>
			</div>
			<div className={styles.jobs}>
				{jobs.map((job) => (
					<div key={job.id} className={styles.job}>
						<div className={styles.index}>{job.id}</div>
						<div className={styles.info}>
						<h3 className={styles.company}>{job.company}</h3>
						</div>	
						<ul className={styles.tasks}>
							{job.tasks.map((task, index) => (
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