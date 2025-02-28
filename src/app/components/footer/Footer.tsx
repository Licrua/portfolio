import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterSlogan from "./FooterSlogan";
import FooterSocialLinks from "./FooterSocialLinks";
import styles from "@/app/styles/componentStyles/footer/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <aside className={styles.aside}>
        <FooterLogo />
        <FooterSlogan />
        <FooterSocialLinks />
        <FooterCopyright />
      </aside>
    </footer>
  );
}

export default Footer;
