import { Layout } from "@/shared/ui";
import Image from "next/image";
import React from "react";

import info_foto_1 from "@/shared/assets/images/info_section_1.png";
import info_foto_2 from "@/shared/assets/images/info_section_2.png";
import info_foto_3 from "@/shared/assets/images/info_section_3.png";

import cls from "./InfoSection.module.scss";

export const InfoSection = () => {
	return (
		<section
			className={cls.info_section}
			id='about_company'
		>
			<Layout>
				<div className={cls.container}>
					<article className={cls.info_card}>
						<div className={cls.info_card_first_container_photo}>
							<Image
								src={info_foto_1}
								alt='info foto'
								className={cls.image}
							/>
						</div>
						<div className={cls.info_card_first_container_text}>
							<p className={cls.title}>
								Мы лидеры в поставках строительного кирпича
							</p>
							<p className={cls.subtitle}>
								наша команда состоит из 50 профессиональных специалистов своего
								дела.
							</p>
							<p className={cls.subtitle}>
								Завод ежедневно изготовливает 10.000 + кирпичей и работает
								исключительно только на современных технологиях, поэтому
								качество кирпича служит длительное время.
							</p>
						</div>
					</article>
					<div>
						<h3 className={cls.brickworks}>Кирпичи нашего завода</h3>

						<article className={cls.info_card}>
							<div className={cls.info_card_second_container_text}>
								<p className={cls.title}>Лейлекский кирпичный завод</p>
								<p className={cls.subtitle}>
									Качество и объемы продукции постоянно растет. Завод может
									похвастаться своим высоким качеством, а также полным
									соответствием всех стандартов, норм, и требований по
									производству кирпича. Его продукция целиком и полностью
									отвечает ГОСТу.
								</p>
							</div>
							<div className={cls.info_card_second_container_photo}>
								<Image
									className={cls.image}
									src={info_foto_2}
									alt='info foto'
								/>
							</div>
						</article>
					</div>
					<article className={cls.info_card}>
						<div className={cls.info_card_third_container_photo}>
							<Image
								className={cls.image}
								src={info_foto_3}
								alt='info foto'
							/>
						</div>
						<div className={cls.info_card_third_container_text}>
							<p className={cls.title}>Поддоны</p>
							<p className={cls.subtitle}>
								Материал, из которого изготовлены деревянные поддоны, в
								сравнении с пластиком и металлом обеспечивает на порядок более
								высокий уровень трения. Таким образом, груз на деревянном
								поддоне надежней фиксируется даже без применения дополнительного
								крепежа.
							</p>
						</div>
					</article>
				</div>
			</Layout>
		</section>
	);
};
