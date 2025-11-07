import styles from "./SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { faGithub, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const SocialMedia: React.FC = () => {
	const linkedInUrl = "https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/";
	const githubUrl = "https://github.com/Lunarisnia";
	const tiktokUrl = "https://www.tiktok.com/@lunarisnia";
	const youtubeUrl = "https://www.youtube.com/@Lounarisnia";

	return <div className={`${styles.row} ${styles.socialMedia}`}>
		<a href={linkedInUrl} target="_blank">
			<FontAwesomeIcon icon={faLinkedin} className={`${styles.socialMediaIcon} ${styles.linkedIn}`} />
		</a>
		<a href={githubUrl} target="_blank">
			<FontAwesomeIcon icon={faGithub} className={`${styles.socialMediaIcon} ${styles.github}`} />
		</a>
		<a href={tiktokUrl} target="_blank">
			<FontAwesomeIcon icon={faTiktok} className={`${styles.socialMediaIcon} ${styles.tiktok}`} />
		</a>
		<a href={youtubeUrl} target="_blank">
			<FontAwesomeIcon icon={faYoutube} className={`${styles.socialMediaIcon} ${styles.youtube}`} />
		</a>
	</div>;
};
