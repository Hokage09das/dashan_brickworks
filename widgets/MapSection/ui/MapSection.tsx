import React from "react";
import Image from "next/image";

import { Layout } from "@/shared/ui";
import { mapInformation } from "../constant";

import cls from "./MapSection.module.scss";

export const MapSection = () => {
	return (
		<section
			className={cls.map_section}
			id='contact'
		>
			<Layout>
				<div className={cls.map_container}>
					<div className={cls.contact_box}>
						<p className={cls.title}> Контактная информация</p>
						<ul className={cls.list_container}>
							{mapInformation.map(({ title, icon }) => {
								return (
									<li className={cls.list}>
										<Image
											src={icon}
											alt='title'
										/>
										{title}
									</li>
								);
							})}
						</ul>
					</div>
					<iframe
						className={cls.map}
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae7a8cebb24e2bcef62f59c4463a5b5c304a542f6ecc225f52070172f18134bfb&amp;source=constructor'
						width='100%'
						height='503'
					></iframe>
					<div className={cls.media_title}>
						<p className={cls.title}> Контактная информация</p>
					</div>
				</div>
			</Layout>
		</section>
	);
};
