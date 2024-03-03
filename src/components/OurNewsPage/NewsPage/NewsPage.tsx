import React from "react";
import scss from "./NewsPage.module.scss";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../assets/OurNewsPage/image1.png";
import img2 from "../../../assets/OurNewsPage/image2.png";

interface DataImages {
  id: number;
  image: StaticImageData;
  text: string;
}
const NewsPageSection = ({ image, text, id }: DataImages) => {
  return (
    <div key={id}>
      <div className={scss.newspage__container}>
        <Image src={img1} alt="error" className={scss.newspage__image} />
        <div className={scss.newspage__inner}>
          <h2>{text}</h2>

          <p className={scss.newspage__text}>
            Компания «SelimTrade» сообщает вам о расширении вариантов дизайна
            гаражных секционных ворот стандартной серии RSD01SC BIW. С 10 марта
            2016 года для заказа стали доступны ворота с дизайном панели «доска»
            в трёх цветовых решениях (RAL 9003, RAL 8014 и «золотой дуб»).
          </p>
          <Image src={img2} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default NewsPageSection;
