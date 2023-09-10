"use client";

import React from "react";

import cls from "./CalcultorWindowList.module.scss";
import Image from "next/image";

import window from "@/shared/assets/images/window.png";
import delete_icon from "@/shared/assets/icons/delete_icon.svg";

export const CalculatorWindowList = () => {
	return (
		<ul className={cls.window_list_container}>
			<li className={cls.window_list}>
				<Image
					src={window}
					alt='Фото окна'
					className={cls.window}
				/>
				<p className={cls.count}>3X</p>
				<p className={cls.width}>120cm</p>
				<p className={cls.height}>200cm</p>
				<Image
					src={delete_icon}
					alt='Кнопка удаления окна'
					className={cls.delete_icon}
				/>
			</li>
			<li className={cls.window_list}>
				<Image
					src={window}
					alt='Фото окна'
					className={cls.window}
				/>
				<p className={cls.count}>3X</p>
				<p className={cls.width}>120cm</p>
				<p className={cls.height}>200cm</p>
				<Image
					src={delete_icon}
					alt='Кнопка удаления окна'
					className={cls.delete_icon}
				/>
			</li>
		</ul>
	);
};
