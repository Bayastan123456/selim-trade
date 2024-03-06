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
      </div>
    </div>
  );
};

export default WorksPage;