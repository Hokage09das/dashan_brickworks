import emailIcon from "@/shared/assets/icons/email_icon.svg";
import phoneIcon from "@/shared/assets/icons/map_phone_icon.svg";
import mapIcon from "@/shared/assets/icons/map_icon.svg";
import calendarIcon from "@/shared/assets/icons/calendar_icon.svg";

interface MapInformationType {
	icon: string;
	title: string;
}

export const mapInformation: MapInformationType[] = [
	{
		icon: emailIcon,
		title: "",
	},
	{
		icon: phoneIcon,
		title: " +996 555 696 222",
	},
	{
		icon: mapIcon,
		title: "Ала-Арчинская, 1/3",
	},
	{
		icon: calendarIcon,
		title: "07:00 -20:00  ( Пн-Пт )",
	},
];
