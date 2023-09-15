"use client";
import React from "react";
import {
	CalculatorBrickForm,
	CalculatorBrickResult,
	Layout,
} from "@/shared/ui";

export const CalculatorSection = () => {
	return (
		<section
			id='online_calculator'
			data-aos='fade-up'
		>
			<Layout>
				<CalculatorBrickForm />
				<CalculatorBrickResult />
			</Layout>
		</section>
	);
};
