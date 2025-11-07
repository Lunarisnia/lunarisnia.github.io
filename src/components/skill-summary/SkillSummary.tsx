import styles from "./SkillSummary.module.css";
import type React from "react";

export const SkillSummary: React.FC<{ skill: string, tools: string[] }> = ({ skill, tools }) => {
	let toolsText = "";
	if (tools.length > 0) {
		toolsText = tools[0];
		for (let i = 1; i < tools.length; i++) {
			toolsText += `, ${tools[i]}`;
		}
	}
	return (
		<div>
			<p className={styles.header1}>
				• {skill}
			</p>
			<p className={styles.tools}>
				{toolsText}
			</p>
		</div>
	);
};
