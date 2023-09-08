import React from "react";
import Image from "next/image";

import { Layout } from "@/shared/ui";

import section_1 from "@/shared/assets/images/section_1.png";
import phone_icon from "@/shared/assets/icons/phone_icon.svg";

import cls from "./MainSeaction.module.scss";

export const MainSection = () => {
	return (
		<section>
			<Layout>
				<article className={cls.container}>
					<div className={cls.title_container}>
						<h2 className={cls.title}>Завод по изготовлению кирпичей</h2>
						<p className={cls.subtitle}>
							Правильный кирпич – залог долговечности и безопасности
						</p>
						<button className={cls.contact_btn}>
							Оформить заказ
							<Image
								alt='contact'
								src={phone_icon}
								className={cls.btn_icon}
							/>
						</button>
					</div>
					<div className={cls.img_container}>
						<Image
							src={section_1}
							className={cls.image}
							alt='human in building'
						/>
					</div>
				</article>
			</Layout>
		</section>
	);
};
