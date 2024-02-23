import img1 from "../assets/ServicesPage/image1.png";
import img2 from "../assets/ServicesPage/image2.png";
import img3 from "../assets/ServicesPage/image3.png";
import img4 from "../assets/ServicesPage/image4.png";
import img5 from "../assets/ServicesPage/image5.png";
import img6 from "../assets/ServicesPage/image6.png";
import img7 from "../assets/ServicesPage/image7.png";
import img8 from "../assets/ServicesPage/image8.png";
import img9 from "../assets/ServicesPage/image9.png";
import img10 from "../assets/ServicesPage/image10.png";
import { StaticImageData } from "next/image";

interface ServicesData {
  id: number;
  image: StaticImageData;
  title: string;
}

export const servicesData: ServicesData[] = [
  {
    id: 1,
    image: img1,
    title: "Промышленные секционные ворота",
  },
  {
    id: 2,
    image: img2,
    title: "Ролл ворота",
  },
  {
    id: 3,

    image: img3,
    title: "Секционные ворота",
  },
  {
    id: 4,

    image: img4,
    title: "Роль ставни",
  },
  {
    id: 5,

    image: img5,
    title: "Откатные ворота",
  },
  {
    id: 6,

    image: img6,
    title: "Распашные ворота",
  },
  {
    id: 7,

    image: img7,
    title: "Автоматика и механизмы для откатных и распашных ворот",
  },
  {
    id: 8,

    image: img8,
    title: "Автоматические шлагбаумы",
  },
  {
    id: 9,

    image: img9,
    title: "Складные ворота",
  },
  {
    id: 10,

    image: img10,
    title: "Отдельно стоящие калитки",
  },
];
