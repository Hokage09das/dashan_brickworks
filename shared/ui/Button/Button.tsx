import React from "react";
import { ButtonProps, ButtonVariant } from "./types";

import cls from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
	const { variant, children } = props;

	const buttonClass =
		variant === ButtonVariant.primary ? cls.button : cls.button_secondary;

	return (
		<button
			{...props}
			className={buttonClass}
		>
			{children}
		</button>
	);
};
