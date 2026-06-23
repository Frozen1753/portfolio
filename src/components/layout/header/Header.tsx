import { Link } from "react-router-dom";
import { HeaderMobile } from "./header-mobile/HeaderMobile";
import { HeaderDesktop } from "./header-desktop/HeaderDesktop";
import { useScreenSize } from "../../../utils/hooks/useScreenSize";
import styles from "./header.module.css";
import { useState } from "react";

export function Header() {
  const { isMobile } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Eliot NADOUCE
        </Link>

        {isMobile ? (
          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={toggle}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <HeaderDesktop />
        )}
      </div>

      {isMobile && (
        <HeaderMobile isOpen={isOpen} closeMenu={close} />
      )}
    </header>
  );
}