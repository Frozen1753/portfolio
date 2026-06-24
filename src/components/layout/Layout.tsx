import { memo } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout = memo(() => {
    return (
        <div className={styles.pageWrapper}>
            <Header />

            <main className={styles.mainContent}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
});