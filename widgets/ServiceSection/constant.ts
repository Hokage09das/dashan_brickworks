import service_icon_1 from "@/shared/assets/icons/service_icon_1.svg";
import service_icon_2 from "@/shared/assets/icons/service_icon_2.svg";
import service_icon_3 from "@/shared/assets/icons/service_icon_3.svg";
import service_icon_4 from "@/shared/assets/icons/service_icon_4.svg";
import service_icon_5 from "@/shared/assets/icons/service_icon_5.svg";
import service_icon_6 from "@/shared/assets/icons/service_icon_6.svg";

interface ServiceType {
	img: string;
	title: string;
	desc: string;
}

export const serviceData: ServiceType[] = [
	{
		img: service_icon_1,
		title: "Удобен в работе",
		desc: "Правильная геометрия и оптимальный вес кирпича делает процесс кладки быстрее, проще, эффективнее  ",
	},
	{
		img: service_icon_2,
		title: "Приемлемая цена",
		desc: "Завод находится в непосредственной близости от месторождения глины. Из-за этого цена ниже    ",
	},
	{
		img: service_icon_3,
		title: "Высокое качество",
		desc: "Постройка сохранит свой первоначальный внешний вид более 50 лет в условиях попеременного замораживания-оттаивания",
	},
	{
		img: service_icon_4,
		title: "Погрузим и разгрузим машину",
		desc: "Поможем перевезти кирпич в пределах региона, возьмем на себя его загрузку и выгрузку, поможем быстро решить заявленной задачи.",
	},
	{
		img: service_icon_5,
		title: "Защита груза в пути",
		desc: "Мы не только отвезем ваш груз, но и обеспечим его сохранность в пути. Защитим кирпичи от влаги и грязи возникновения трещин.",
	},
	{
		img: service_icon_6,
		title: "Без выходных и без обедов",
		desc: "Завод работает без выходных, для вашего удобства. Обеспечивая экономию и сохранность вашего времени.",
	},
];
