import React from "react";

import { Layout, ServiceCard } from "@/shared/ui";

import { serviceData } from "../constant";

import cls from "./SerivceSection.module.scss";

export const ServiceSection = () => {
	return (
		<section className={cls.main_container}>
			<Layout>
				<article>
					<h3 className={cls.title}>Наши услуги</h3>
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
