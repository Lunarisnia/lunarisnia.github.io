import styles from "./TitleCard.module.css";
import type React from "react";

export const TitleCard: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
	return (
		<div className={styles.titleCardBody}>
			<h1 className={styles.header1}>
				{title}
			</h1>
			{subtitle ? <p className={styles.subtitle1}>{subtitle}</p> : null}
		</div>
	);
};
