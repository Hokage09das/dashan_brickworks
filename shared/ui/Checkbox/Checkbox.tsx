import React from "react";
import { CheckboxProps } from "./types";

import cls from "./Checkbox.module.scss";

export const Checkbox = (props: CheckboxProps) => {
	return (
		<>
			<input
				type='checkbox'
				className={cls.custom_checkbox}
				id='happy'
				{...props}
			/>
			<label htmlFor='happy'></label>
		</>
	);
};
