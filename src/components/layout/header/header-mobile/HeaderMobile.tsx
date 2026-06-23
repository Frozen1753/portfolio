import { Link } from "react-router-dom";
import { headerLinks } from "../headerLinks";
import styles from "./headerMobile.module.css";

export function HeaderMobile({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  if (!isOpen) return null;

  return (
    <nav className={styles.navMobile}>
      {headerLinks.map((item) => (
        <Link key={item.to} to={item.to} onClick={closeMenu}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}