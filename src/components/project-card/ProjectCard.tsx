import { Children, isValidElement, useEffect, useState, type FC, type ReactNode } from "react";
import styles from "./ProjectCard.module.css";

type ImageSubProp = {
	width?: number;
	height?: number;
	alt?: string;
	title?: string;
	href?: string;
	src: string;
}

const Image = ({ src, width, height, alt, title, href }: ImageSubProp) => {
	return (
		<a href={href} target="_blank">
			<img className={styles.image} src={src} width={width} height={height} title={title} alt={alt} />
		</a>
	)
}

type DetailSubProp = {
	title: string;
	description: string;
	sm?: boolean;
}
const Detail = ({ title, description, sm }: DetailSubProp) => {
	return (
		<div className={styles.titleCard}>
			<h1 className={`${styles.titleCardHeader} ${sm ? styles.sm : ""}`} >{title}</h1>
			<p>{description}</p>
		</div>);
}

type ProjectCardProp = FC<{ children: ReactNode }> & {
	Image: typeof Image;
	Detail: typeof Detail;
};

const ProjectCard: ProjectCardProp = ({ children }) => {
	const [image, setImage] = useState(<div></div>);
	const [detail, setDetail] = useState(<div></div>);

	useEffect(() => {
		Children.forEach(children, child => {
			if (!isValidElement(child)) return;
			switch (child.type) {
				case Image:
					setImage(child);
					break;
				case Detail:
					setDetail(child);
					break;
				default:
					return;
			}
		});
	}, [children]);

	return (
		<div className={styles.container}>
			<div className={`${styles.body}`} >
				{image}
			</div>
			{detail}
		</div>
	);
};

ProjectCard.Image = Image;
ProjectCard.Detail = Detail;

export { ProjectCard };
