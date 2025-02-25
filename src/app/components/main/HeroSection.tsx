import styles from "@/app/styles/componentStyles/heroSection.module.css";

function HeroSection() {
	return ( 
		<section className={styles.hero}>
			<div className={styles.imageContainer}>
				<img src="/images/portfolio-Photoroom.png" alt="heroImage" className={styles.heroImage} />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Я фронтенд-разработчик - Licrua</h1>
				<p className={styles.description}>
				"Люблю создавать быстрые, удобные и современные интерфейсы. Готов помочь вашему проекту стать лучше!"
				</p>
			</div>
		</section>
	);
}

export default HeroSection;
