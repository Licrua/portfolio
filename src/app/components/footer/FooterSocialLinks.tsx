import socialLinks from "@/data/socialLinks";
import Image from "next/image";
import styles from "@/app/styles/componentStyles/footerSocialLinks.module.css";

export default function FooterSocialLinks() {
  return (
    <div className={styles.container} >
      {socialLinks.map((link) => (
        <a href={link.url} key={link.id} className="p-2">
          <Image width={50} height={50} src={link.img} alt={link.name} />
        </a>
      ))}
    </div>
  );
}
