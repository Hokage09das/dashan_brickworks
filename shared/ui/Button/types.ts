import { ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
	primary = "primary",
	secondary = "secondary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
}
