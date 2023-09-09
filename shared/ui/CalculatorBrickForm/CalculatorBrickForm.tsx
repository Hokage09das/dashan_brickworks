"use client";
import Image from "next/image";
import React, { useState, InputHTMLAttributes } from "react";

import brick_icon from "@/shared/assets/icons/brick_icon.svg";

import cls from "./CalculatorBrickForm.module.scss";
import { Checkbox, Input } from "..";

export const CalculatorBrickForm = () => {
	const [checked, setChecked] = useState(false);
	console.log(checked);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		setChecked(e.target.checked);
	};
	return (
		<form className={cls.brick_form}>
			<div className={cls.title_container}>
				<Image
					src={brick_icon}
					alt='Иконка Кирпича'
					className={cls.image}
				/>
				Калькулятор кирпича
			</div>
			<article className={cls.brick_box}>
				<div className={cls.input_container}>
					<p className={cls.input_title}>Марка и цвет кирпича</p>
					<div className={cls.input_box}>
						<Input
							disabled
							defaultValue='Облицивочный красный'
							style={{ textAlign: "center" }}
						/>
					</div>
				</div>
				<div className={cls.input_container}>
					<p className={cls.input_title}>Укажите периметр наружных стен (м):</p>
					<div className={cls.input_box}>
						<Input />X
						<Input />
					</div>
				</div>
				<div className={cls.input_container}>
					<p className={cls.input_title}>
						Укажите толщину кладки (0.5 — 3,5 кирпича):
					</p>
					<div className={cls.input_box}>
						<Input />
					</div>
				</div>
				<div className={cls.input_container}>
					<p className={cls.input_title}>Рассчитать с раствором (10 мм):</p>
					<div className={cls.input_box}>
						<Checkbox
							checked={checked}
							onChange={onChange}
						/>
					</div>
				</div>
			</article>
		</form>
	);
};
