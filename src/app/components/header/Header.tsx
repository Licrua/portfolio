import styles from "@/app/styles/componentStyles/header.module.css";
import { HeaderNav } from "../header/HeaderNav";
import { HeaderLogo } from "./HeaderLogo";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}
