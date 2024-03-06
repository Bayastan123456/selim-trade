import React, { useMemo } from "react";
import scss from "./SimilarNews.module.scss";
import image1 from "../../../assets/lastNews/Rectangle1.png";
import image2 from "../../../assets/lastNews/Rectangle2.png";
import image3 from "../../../assets/lastNews/Rectangle3.png";
import Image from "next/image";

const SimilarNews = () => {
  const dataLastNews = [
    {
      image: image1,
      text: "РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH",
    },
    {
      image: image2,
      text: "РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW",
    },
    {
      image: image3,
      text: "СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN",
    },
  ];
  const dataLastNewsMap = useMemo(
    () =>
      dataLastNews.map((item, index) => (
        <div key={index} className={scss.lastNews__images}>
          <Image
            src={item.image}
            alt="error"
            className={scss.lastNews__image}
            width={400}
            height={400}
          />
          <p>{item.text}</p>
        </div>
      )),
    []
  );
  return (
    <div className={scss.lastNews__container2}>
      <h3>похожие новости</h3>
      <div className={scss.lastNews__container}>
        <div className={scss.lastNews__bloc}>{dataLastNewsMap}</div>
      </div>
    </div>
  );
};

export default SimilarNews;
