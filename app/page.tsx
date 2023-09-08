import Image from "next/image";
import styles from "./page.module.css";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MainSection } from "@/widgets/MainSection";

import "./globals.scss";
import { ServiceSection } from "@/widgets/ServiceSection";

export default function Home() {
	return (
		<div className={styles.main}>
			<Header />
			<main>
				<MainSection />
				<ServiceSection />
			</main>
			<Footer />
		</div>
	);
}
