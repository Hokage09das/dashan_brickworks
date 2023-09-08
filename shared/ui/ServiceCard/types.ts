export interface StaticImageData {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
	blurWidth?: number;
	blurHeight?: number;
}

export interface StaticRequire {
	default: StaticImageData;
}
export interface ServiceCardProps {
	img: string | StaticImageData | StaticRequire;
	title: string;
	description: string;
}
