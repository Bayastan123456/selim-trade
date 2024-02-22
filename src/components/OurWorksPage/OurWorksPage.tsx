import React from "react";
import scss from "./OurWorksPage.module.scss";
import img1 from "../../assets/ourWorksPage/image 21.png";
import img2 from "../../assets/ourWorksPage/image 2.png";
import img3 from "../../assets/ourWorksPage/image 3.png";
import img4 from "../../assets/ourWorksPage/image 4.png";
import img5 from "../../assets/ourWorksPage/image 5.png";
import img6 from "../../assets/ourWorksPage/image 6.png";
import img7 from "../../assets/ourWorksPage/image 7.png";
import img8 from "../../assets/ourWorksPage/image 8.png";
import img9 from "../../assets/ourWorksPage/image 9.png";
import Image from "next/image";

const OurWorksPage = () => {
  const images = [
    {
      img: img1,
      id: 1,
    },
    {
      img: img2,
      id: 2,
    },
    {
      img: img3,
      id: 3,
    },
    {
      img: img4,
      id: 4,
    },
    {
      img: img5,
      id: 5,
    },
    {
      img: img6,
      id: 6,
    },
    {
      img: img7,
      id: 7,
    },
    {
      img: img8,
      id: 8,
    },
    {
      img: img9,
      id: 9,
    },
  ];
  return (
    <div className={scss.OurWorks__container}>
      <div className={scss.OurWorks__title}>
        <h3>Наши работы</h3>
        <p>
          Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться
          идеями для собственного проекта. Вы найдёте проект по душе и нраву,
          который захотите воплотить в жизнь.
        </p>
      </div>
      <div className={scss.images}>
        {images.map((item) => (
          <div key={item.id} className={scss.image}>
            <Image src={item.img} alt="error" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorksPage;
