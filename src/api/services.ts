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
  text: string;
}

export const servicesData: ServicesData[] = [
  {
    id: 1,
    image: img1,
    text: "Промышленные секционные ворота",
  },
  {
    id: 2,
    image: img2,
    text: "Ролл ворота",
  },
  {
    id: 3,

    image: img3,
    text: "Секционные ворота",
  },
  {
    id: 4,

    image: img4,
    text: "Роль ставни",
  },
  {
    id: 5,

    image: img5,
    text: "Откатные ворота",
  },
  {
    id: 6,

    image: img6,
    text: "Распашные ворота",
  },
  {
    id: 7,

    image: img7,
    text: "Автоматика и механизмы для откатных и распашных ворот",
  },
  {
    id: 8,

    image: img8,
    text: "Автоматические шлагбаумы",
  },
  {
    id: 9,

    image: img9,
    text: "Складные ворота",
  },
  {
    id: 10,

    image: img10,
    text: "Отдельно стоящие калитки",
  },
];
