import styles from "@/app/styles/componentStyles/footerLogo.module.scss";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className={styles.container}>
      <Image className={styles.img} width={200} height={200} src="/images/footer/footerLogo.webp" alt="footerLogo" />
    </div>
  );
}

export default FooterLogo;
