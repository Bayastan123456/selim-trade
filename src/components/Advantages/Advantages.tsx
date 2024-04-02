import React, { useMemo } from "react";
import scss from "./Advantages.module.scss";
import Image from "next/image";
import ReusableComponent from "@/components/ReusableComponent/ReusableComponent";
import logo1 from "../../assets/Advantages/logo1.png";
import logo2 from "../../assets/Advantages/logo2.png";
import logo3 from "../../assets/Advantages/logo3.png";
import logo4 from "../../assets/Advantages/logo4.png";
import logo5 from "../../assets/Advantages/logo5.png";


const Advantages = () => {
  const AdvantagesData = [
    {
      title: " Бесплатный выезд специалиста для замеров",
      icon: logo1,
    },
    {
      title: " Многолетний опыт работы",
      icon: logo2,
    },

    {
      title: " Минимальные сроки производства",
      icon: logo3,
    },
    {
      title: "Высокая квалификация сотрудиков",
      icon: logo4,
    },
    {
      title: "Постгарантийное обслуживание и ремонт",
      icon: logo5,
    },
  ];
  const iconData = useMemo(
    () =>
      AdvantagesData.map((item, index) => (
        <div key={index} className={scss.advantages__card}>
          <Image src={item.icon} alt="icon" width={50} height={50} />
          <p>{item.title}</p>
        </div>
      )),
    []
  );

  return (
    <div className={scss.advantages__container}>
      <ReusableComponent title="Наши преимущeства">
        <div className={scss.advantages__blok}>{iconData}</div>
      </ReusableComponent>
    </div>
  );
};


export default Advantages;
