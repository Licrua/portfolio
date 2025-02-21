import styles from "@/app/styles/componentStyles/heroSection.module.scss";

function HeroSection() {
	return ( 
		<section className={styles.hero}>
			<div className={styles.imageContainer}>
				<img src="/images/portfolio-Photoroom.png" alt="heroImage" className={styles.heroImage} />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Я фронтенд-разработчик - Licrua</h1>
				<p className={styles.description}>
					Я, вероятно, самый увлеченный разработчик, с которым вам когда-либо доведется работать. 
					Если у вас есть классный проект, которому нужны отличные навыки, я именно тот, кто вам нужен.
				</p>
			</div>
		</section>
	);
}

export default HeroSection;
