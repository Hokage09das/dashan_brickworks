import React from "react";
import { ButtonProps, ButtonVariant } from "./types";

import cls from "./Button.module.scss";
import { CalculatorBrickResult } from "..";

export const Button = (props: ButtonProps) => {
	const { variant, children, className } = props;

	const buttonClass =
		variant === ButtonVariant.primary ? cls.button : cls.button_secondary;

	return (
		<button
			{...props}
			className={`${buttonClass} ${className}`}
		>
			{children}
		</button>
	);
};
