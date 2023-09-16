"use client";
import React from "react";
import {
	CalculatorBrickForm,
	CalculatorBrickResult,
	Layout,
} from "@/shared/ui";

import cls from './CalculatorSEction.module.scss'

export const CalculatorSection = () => {
	return (
		<section
			id='online_calculator'
			data-aos='fade-up'
			className={cls.calculate_section}
		>
			<Layout>
				<CalculatorBrickForm />
				<CalculatorBrickResult />
			</Layout>
		</section>
	);
};
