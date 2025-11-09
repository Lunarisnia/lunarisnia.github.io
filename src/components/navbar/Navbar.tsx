import styles from "./Navbar.module.css";
import type React from "react";

export const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<nav className={styles.body}>
			{children}
		</nav>
	);
};
