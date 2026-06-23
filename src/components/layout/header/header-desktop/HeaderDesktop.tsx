import { Link } from "react-router-dom";
import { headerLinks } from "../headerLinks";
import styles from "./headerDesktop.module.css";

export function HeaderDesktop() {
  return (
    <nav className={styles.navDesktop}>
      {headerLinks.map((item) => (
        <Link key={item.to} to={item.to}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}