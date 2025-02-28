import styles from "@/app/styles/componentStyles/header/header.module.css";
import { HeaderNav } from "../header/HeaderNav";
import LocaleSwitcher from "../generic/LocaleSwitcher";
import HeaderLogo from "./HeaderLogo";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <LocaleSwitcher />
      <HeaderNav />
    </header>
  );
}
