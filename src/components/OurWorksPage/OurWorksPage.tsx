<<<<<<< HEAD
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
import img10 from "../../assets/ourWorksPage/image 10.png";

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
      img: img10,
      id: 7,
    },
    {
      img: img7,
      id: 8,
    },
    {
      img: img8,
      id: 9,
    },
    {
      img: img9,
      id: 10,
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
        <div className={scss.containerImage}>
          <div className={scss.images1}>
            <Image src={img1} alt="error" />
            <Image src={img4} alt="error" />
          </div>
          <div className={scss.containerImage2}>
            <div className={scss.image2}>
              <Image src={img2} alt="error" />
              <Image src={img3} alt="error" />
            </div>
            <Image src={img5} alt="error" className={scss.image3} />
          </div>
        </div>

        <div>
          <Image src={img6} alt="error" />
          <Image src={img10} alt="error" />
          <Image src={img8} alt="error" />
        </div>
        <div>
          <Image src={img9} alt="error" />
          <Image src={img7} alt="error" />
        </div>
=======
import scss from "./OurWorksPage.module.scss";
import Image from "next/image";
import img1 from "../../assets/Workspage/img1.png";
import img2 from "../../assets/Workspage/img2.png";
import img3 from "../../assets/Workspage/img3.png";
import img4 from "../../assets/Workspage/img4.png";
import img5 from "../../assets/Workspage/img5.png";
import img6 from "../../assets/Workspage/img6.png";
import img7 from "../../assets/Workspage/img7.png";
import img8 from "../../assets/Workspage/img8.png";
import img9 from "../../assets/Workspage/img9.png";
import img10 from "../../assets/Workspage/img10.png";

import { useMemo } from "react";

const WorksPage = () => {
  const dataOurWorks = [
    { image: img1, width: 465, height: 374 },
    { image: img2, width: 345, height: 278 },
    { image: img3 , width: 490, height: 278},
    { image: img4, width: 465, height: 278 },
    { image: img5, width: 865, height: 374 },
    { image: img6, width: 369, height: 278 },
    { image: img7, width: 369, height: 278 },
    { image: img8, width: 562, height: 278 },
    { image: img9, width: 865, height: 278 },
    { image: img10, width: 465, height: 278 },

  ];

  const dataOurWorksMap = useMemo(
    () =>
      dataOurWorks.map((item, index) => (
        <div key={index} className={scss.ourworks__images}>
          <Image
            src={item.image}
            alt="error"
            className={scss.ourworks__image}
            width={item.width}
            height={item.height}
          />
        </div>
      )),
    [dataOurWorks]
  );

  return (
    <div>
      <div className={scss.works}>
        <div className={scss.works__text}>
          <h1>Наши работы</h1>
          <div className={scss.works__text_desc}>
            <h4>
              Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться
              идеями для собственного проекта. Вы найдете проект по душе и нраву,
              который захотите воплотить в жизнь.
            </h4>
          </div>
        </div>
        <div className={scss.cards}>{dataOurWorksMap}</div>
>>>>>>> ee85d00689643d5c546c289818ba4d1e95b28451
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default OurWorksPage;
=======
export default WorksPage;
>>>>>>> ee85d00689643d5c546c289818ba4d1e95b28451
