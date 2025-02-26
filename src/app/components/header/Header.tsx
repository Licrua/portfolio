import styles from "@/app/styles/componentStyles/header.module.css";
import { HeaderNav } from "../header/HeaderNav";
import { HeaderLogo } from "./HeaderLogo";
import LocaleSwitcher from "../generic/LocaleSwitcher";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <LocaleSwitcher />
      <HeaderNav />
    </header>
  );
}
