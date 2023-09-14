"use client";

import styles from "./page.module.css";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MapSection } from "@/widgets/MapSection";
import { MainSection } from "@/widgets/MainSection";
import { InfoSection } from "@/widgets/InfoSection/";
import { ServiceSection } from "@/widgets/ServiceSection";
import { CalculatorSection } from "@/widgets/CalculatorSection";
import { CertificationSection } from "@/widgets/CertificationSection";
import { AplicationFormSection } from "@/widgets/AplicationFormSection";

import "./globals.scss";

export default function Home() {
	return (
		<div className={styles.main}>
			<Header />
			<main>
				<MainSection />
				<ServiceSection />
				<InfoSection />
				<CalculatorSection />
				<CertificationSection />
				<AplicationFormSection />
				<MapSection />
			</main>
			<Footer />
		</div>
	);
}
