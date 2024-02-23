import ReusableComponent from "../ReusableComponent/ReusableComponent";
import Image from "next/image";
import React, { useMemo } from "react";
import scss from "./TypesOfGates.module.scss"
import img1 from "../../assets/TypesOfGates/img1.png"
import img2 from "../../assets/TypesOfGates/img2.png"
import img3 from "../../assets/TypesOfGates/img3.png"
import img4 from "../../assets/TypesOfGates/img4.png"
import img5 from "../../assets/TypesOfGates/img5.png"

const TypesOfGates= () => {
  const serviceData = [
    {
      title: "Противопожарные распашные ворота",
      icon: img1,
    },
    {
      title: " Противопожарные секционные ворота",
      icon: img2,
    },

    {
      title: " Откатные ворота",
      icon: img3,
    },
    {
      title: "Скоростные рулонные ворота",
      icon: img4,
    },
    {
        title: "Распашные плёночные ворота",
        icon: img5,
      },
  ];
  const iconData = useMemo(
    () =>
      serviceData.map((item, index) => (
        <div key={index} className={scss.service__card}>
          <div className={scss.image_cards}>
            <Image src={item.icon} alt="icon" width={256} height={314} />
          </div>
          <div className={scss.service__text}>
            <p>{item.title}</p>
          </div>
        </div>
      )),
    []
  );

  return (
    <div className={scss.service__container}>
      <ReusableComponent title="ТИПЫ ВОРОТ">
        <div className={scss.service__blok}>{iconData}</div>
      </ReusableComponent>
    </div>
  );
};

export default TypesOfGates;