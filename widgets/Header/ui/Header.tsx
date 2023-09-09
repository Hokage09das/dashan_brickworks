import React from "react";

import { Layout, Navigation } from "@/shared/ui";
import logo from "@/shared/assets/icons/logo.svg";

import classes from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
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
				</div>
			</Layout>
		</header>
	);
};
