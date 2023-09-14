import { Layout } from "@/shared/ui";
import Image from "next/image";
import React from "react";

import white_logo from "@/shared/assets/icons/white_logo.svg";
import { footerInfo } from "../constants";

import cls from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={cls.footer}>
			<Layout>
				<article className={cls.footer_content_container}>
					<div className={cls.image_box}>
						<Image
							alt='Логотип'
							src={white_logo}
							className={cls.image}
						/>
					</div>
					<div className={cls.text_box}>
						<ul className={cls.text_box_content}>
							{footerInfo.map((item) => {
								return <li>{item.title}</li>;
							})}
						</ul>
					</div>
				</article>
			</Layout>
		</footer>
	);
};
