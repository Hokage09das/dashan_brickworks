import React from "react";
import Image from "next/image";

import { Button, Layout } from "@/shared/ui";

import section_1 from "@/shared/assets/images/section_1.png";
import phone_icon from "@/shared/assets/icons/phone_icon.svg";

import cls from "./MainSeaction.module.scss";
import { ButtonVariant } from "@/shared/ui/Button/types";

export const MainSection = () => {
	return (
		<section data-aos='fade-up'>
			<article className={cls.container}>
				<div className={cls.title_container}>
					<h2 className={cls.title}>Завод по изготовлению кирпичей</h2>
					<p className={cls.subtitle}>
						Правильный кирпич – залог долговечности и безопасности
					</p>
					<Button
						className={cls.contact_btn}
						variant={ButtonVariant.primary}
					>
						<a
							href='#review'
							className={cls.nav}
						>
							Оформить заказ
							<Image
								alt='contact'
								src={phone_icon}
								className={cls.btn_icon}
							/>
						</a>
					</Button>
				</div>
				<div className={cls.img_container}>
					<h2 className={cls.title_image}>Завод по изготовлению кирпичей</h2>

					<Image
						src={section_1}
						className={cls.image}
						alt='human in building'
					/>
				</div>
			</article>
		</section>
	);
};
