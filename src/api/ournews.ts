import img1 from "../assets/OurNewsPage/imgnews1.png";
import img2 from "../assets/OurNewsPage/imgnews2.png";
import img3 from "../assets/OurNewsPage/imgnews3.png";
import { StaticImageData } from "next/image";

interface NewsData {
  id: number;
  image: StaticImageData;
  title: string;
}

export const newsData: NewsData[] = [
  {
    id: 1,
    image: img1,
    title: "РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH",
  },
  {
    id: 2,
    image: img2,
    title: "РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW",
  },
  {
    id: 3,

    image: img3,
    title: "СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN",
  },
  {
    id: 4,

    image: img1,
    title: "РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH",
  },
  {
    id: 5,

    image: img2,
    title: "РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW",
  },
  {
    id: 6,

    image: img3,
    title: "СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN",
  },
  {
    id: 7,

    image: img1,
    title: "РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH",
  },
  {
    id: 8,

    image: img2,
    title: "РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW",
  },
  {
    id: 9,

    image: img3,
    title: "СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN",
  },
];
