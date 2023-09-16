"use client";
import React from "react";
import Image from "next/image";
import { Button, Input } from "..";

import window_icon from "@/shared/assets/icons/window_icon.svg";

import cls from "./CalculatorWindowForm.module.scss";
import { ButtonVariant } from "../Button/types";

export const CalculatorWindowForm = () => {
	return (
		<div className={cls.window_form}>
			<div className={cls.title_container}>
				<Image
					src={window_icon}
					alt='Иконка Кирпича'
					className={cls.image}
				/>
				Добавить окно
			</div>
			<article className={cls.window_box}>
				<div className={cls.input_container}>
					<p className={cls.input_title}>Параметры окон (см)</p>
					<div className={cls.input_box}>
						<Input
							type='number'
							placeholder='Длина'
						/>
						X
						<Input type='number' />
					</div>
				</div>
				<div className={cls.input_container}>
					<p className={cls.input_title}>Количество окон</p>
					<div className={cls.input_box}>
						<Input type='number' />
					</div>
				</div>
			</article>
			<Button
				variant={ButtonVariant.secondary}
				style={{ alignSelf: "flex-end" }}
				className={cls.button}
			>
				Добавить еще окно
			</Button>
		</div>
	);
};
