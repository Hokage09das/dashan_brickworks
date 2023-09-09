"use client";

import React, { FormEvent } from "react";
import { Button, Input } from "..";

import cls from "./AplicationForm.module.scss";
import { ButtonVariant } from "../Button/types";

export const AplicationForm = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={onSubmit}
			className={cls.aplication_form}
		>
			<div className={cls.inputs_box}>
				<div className={cls.input_container}>
					<Input
						placeholder='Введите ваше имя'
						type='text'
					/>
					<Input
						placeholder='Введите ваш телефон'
						type='tel'
					/>
				</div>
				<textarea
					className={cls.text_area}
					placeholder='Комментарий'
				/>
			</div>
			<Button variant={ButtonVariant.primary}>Отправить заявку</Button>
		</form>
	);
};
