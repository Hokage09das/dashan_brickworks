import Image from "next/image";
import { ServiceCardProps } from "./types";

import cls from "./ServiceCard.module.scss";

export const ServiceCard = ({ img, title, description }: ServiceCardProps) => {
	return (
		<div className={cls.card}>
			<div className={cls.icon_container}>
				<Image
					src={img}
					alt={title}
				/>
			</div>
			<p className={cls.title}>{title}</p>
			<p className={cls.desc}>{description}</p>
		</div>
	);
};
