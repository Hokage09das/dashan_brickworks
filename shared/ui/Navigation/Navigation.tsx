import React from "react";
import { NavbarType } from "./types";

import classes from "./Navigation.module.scss";

const navbar: NavbarType[] = [
	{
		title: "Продукция",
		id: "#products",
	},
	{
		title: "Услуги",
		id: "#services",
	},
	{
		title: "Калькулятор",
		id: "#online_calculator",
	},
	{
		title: "О компании",
		id: "#about_company",
	},
	{
		title: "Контакты",
		id: "#contact",
	},
];

export const Navigation = () => {
	return (
		<nav className={classes.navbar}>
			{navbar.map((el) => {
				return (
					<a
						href={el.id}
						className={classes.a}
					>
						{el.title}
					</a>
				);
			})}
		</nav>
	);
};
