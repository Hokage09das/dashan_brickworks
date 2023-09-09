import React from "react";
import { InputProps } from "./types";

import cls from "./Input.module.scss";

export const Input = (props: InputProps) => {
	return (
		<input
			{...props}
			className={cls.input}
		/>
	);
};
