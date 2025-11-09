import styles from "./WorkHistory.module.css";
import { Children, isValidElement, useEffect, useState, type FC, type ReactNode } from "react";

type SubProp = {
	children: ReactNode;
}

const Header = ({ children }: SubProp) => {
	return <h1 className={styles.header}>{children}</h1>
}
const Detail = ({ children }: SubProp) => {
	return <div className={styles.detail}>{children}</div>
}
const Duration = ({ children }: SubProp) => {
	return <p className={styles.duration}>{children}</p>
}

type WorkHistoryComponent = FC<{ children: ReactNode, href?: string }> & {
	Header: typeof Header;
	Detail: typeof Detail;
	Duration: typeof Duration;
};

const WorkHistory: WorkHistoryComponent = ({ children, href }) => {
	const [header, setHeader] = useState(<div></div>);
	const [duration, setDuration] = useState(<div></div>);
	const [detail, setDetail] = useState(<div></div>);

	useEffect(() => {
		Children.forEach(children, child => {
			if (!isValidElement(child)) return;
			switch (child.type) {
				case Header:
					setHeader(child);
					break;
				case Detail:
					setDetail(child);
					break;
				case Duration:
					setDuration(child)
					break;
				default:
					return;
			}
		})
	}, [children])

	return (
		<a href={href} target="_blank">
			<div className={styles.body}>
				{header}
				{duration}
				{detail}
			</div>
		</a>
	);
};

WorkHistory.Header = Header;
WorkHistory.Detail = Detail;
WorkHistory.Duration = Duration;

export { WorkHistory };
