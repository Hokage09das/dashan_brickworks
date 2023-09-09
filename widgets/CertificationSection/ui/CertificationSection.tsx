import React from "react";
import Image from "next/image";

import cls from "./CertificationSection.module.scss";
import { Layout } from "@/shared/ui";
import { certificates } from "../constants";
import vector from "@/shared/assets/images/vector.png";

export const CertificationSection = () => {
	return (
		<section className={cls.certification_section}>
			<Layout>
				<p className={cls.certification_title}>Сертификация</p>
			</Layout>
			<div className={cls.main_box}>
				<Layout>
					<div className={cls.certificat_box}>
						{certificates.map((item, index) => {
							return (
								<div
									className={cls.certificat_container}
									key={index}
								>
									<Image
										src={vector}
										alt='vector'
										className={cls.vector}
									/>
									<Image
										src={item.image}
										alt='Сертификаты'
										className={cls.certificate}
									/>
								</div>
							);
						})}
					</div>
				</Layout>
			</div>
		</section>
	);
};
