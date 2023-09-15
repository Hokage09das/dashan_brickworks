"use client";

import React, { useState, useEffect } from "react";

import { BurgerMenu, Layout, Navigation } from "@/shared/ui";
import logo from "@/shared/assets/icons/logo.svg";

import classes from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
	const [isBurgerMenu, setIsBurgerMenu] = useState(false);

	const toggleBergerMenu = () => {
		setIsBurgerMenu((prev) => !prev);
	};

	useEffect(() => {
		if (isBurgerMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isBurgerMenu]);

	return (
		<header className={classes.header}>
			<Layout>
				<div className={classes.header_container}>
					<div className={classes.logo}>
						<Image
							src={logo}
							alt='logo'
						/>
						ДаШань Кирпичный Завод
					</div>
					<div className={classes.navigation}>
						<Navigation />
					</div>
					<div className={classes.burger_container}>
						<BurgerMenu
							isBurgerVisible={isBurgerMenu}
							toggleBergerMenu={toggleBergerMenu}
						/>
						<div
							className={classes.burger_menu_content}
							style={{ display: isBurgerMenu ? "flex" : "none" }}
						>
							<a
								className={classes.nav}
								href='#product'
								onClick={toggleBergerMenu}
							>
								Продукция
							</a>
							<a
								className={classes.nav}
								href='#services'
								onClick={toggleBergerMenu}
							>
								Услуги
							</a>
							<a
								className={classes.nav}
								href='#online_calculator'
								onClick={toggleBergerMenu}
							>
								Калькулятор
							</a>
							<a
								className={classes.nav}
								href='#about_company'
								onClick={toggleBergerMenu}
							>
								О компании
							</a>
							<a
								className={classes.nav}
								href='#contact'
								onClick={toggleBergerMenu}
							>
								Контакты
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</header>
	);
};
