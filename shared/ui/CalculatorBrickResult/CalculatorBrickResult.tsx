import React from "react";

import cls from "./CalculatorBrickResult.module.scss";

export const CalculatorBrickResult = () => {
	return (
		<div className={cls.result_container}>
			<p className={cls.title}>Для вашего строения требуется:</p>
			<ul className={cls.content_box}>
				<li className={cls.content}>
					<p className={cls.desc}>Кирпичей:</p>
					<p className={cls.result}>0 шт</p>
				</li>
				<li className={cls.content}>
					<p className={cls.desc}>Поддонов:</p>
					<p className={cls.result}>0 шт</p>
				</li>
				<li className={cls.content}>
					<p className={cls.desc}>Приблизительная стоимость:</p>
					<p className={cls.result}>0 сом</p>
				</li>
				<li className={cls.content}>
					<p className={cls.desc}>Стоимость одного поддона:</p>
					<p className={cls.result}>12 000 сом</p>
				</li>
			</ul>
		</div>
	);
};
