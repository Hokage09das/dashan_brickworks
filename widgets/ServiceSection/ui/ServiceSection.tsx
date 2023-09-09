import React from "react";

import Image from "next/image";
import { Layout, ServiceCard } from "@/shared/ui";

import { serviceData } from "../constant";

import logo from "@/shared/assets/icons/logo_2variant.svg";

import cls from "./SerivceSection.module.scss";

export const ServiceSection = () => {
	return (
		<section
			id='services'
			className={cls.main_container}
		>
			<Layout>
				<article>
					<div className={cls.title_container}>
						<h3 className={cls.title}>Наши услуги</h3>
						<div className={cls.image_container}>
							<Image
								src={logo}
								alt='Логотип'
							/>
						</div>
					</div>
					<div className={cls.card_container}>
						{serviceData.map((item, index) => (
							<div className={cls.card}>
								<ServiceCard
									key={index}
									img={item.img}
									title={item.title}
									description={item.desc}
								/>
							</div>
						))}
					</div>
				</article>
			</Layout>
		</section>
	);
};
