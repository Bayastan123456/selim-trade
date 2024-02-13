import React, { useMemo } from "react";
import scss from "./LastNews.module.scss";
import image1 from "../../assets/lastNews/Rectangle1.png";
import image2 from "../../assets/lastNews/Rectangle2.png";
import image3 from "../../assets/lastNews/Rectangle3.png";
import Image from "next/image";
import ReusableComponent from "../ReusableComponent/ReusableComponent";

const LastNews = () => {
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
          />
          <p>{item.text}</p>
        </div>
      )),
    []
  );
  return (
    <div className={scss.lastNews__container}>
      <ReusableComponent title="Последние новости">
        <div className={scss.lastNews__bloc}>{dataLastNewsMap}</div>
        <button>все новости</button>
      </ReusableComponent>
    </div>
  );
};

export default LastNews;
