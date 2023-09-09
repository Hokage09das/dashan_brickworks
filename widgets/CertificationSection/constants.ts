import { StaticImageData } from "next/image";

import certificate_image from "@/shared/assets/images/certificate.png";

interface CetificateType {
	image: StaticImageData;
}

export const certificates: CetificateType[] = [
	{
		image: certificate_image,
	},
	{
		image: certificate_image,
	},
	{
		image: certificate_image,
	},
	{
		image: certificate_image,
	},
];
