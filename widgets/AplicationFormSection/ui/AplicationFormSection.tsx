"use client";

import React from "react";
import { AplicationForm, Layout } from "@/shared/ui";
import Image from "next/image";

import builder from "@/shared/assets/images/builder.png";

import cls from "./AplicationFormSection.module.scss";

export const AplicationFormSection = () => {
	return (
		<section
			className={cls.aplication_form_section}
			id='review'
		>
			<Layout>
				<article className={cls.aplication_form_container}>
					<div className={cls.image_container}>
						<Image
							src={builder}
							alt='Оставте заявку'
						/>
					</div>
					<div className={cls.form_container}>
						<h3 className={cls.title}>Оставьте Заявку</h3>
						<p className={cls.desc}>
							на оставлинную вами заявку, наши специалисты свяжутся с вами в
							ближайшее время
						</p>
						<AplicationForm />
					</div>
				</article>
			</Layout>
		</section>
	);
};
