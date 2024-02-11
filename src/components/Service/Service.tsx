import React, { useMemo } from "react";
import scss from "./Service.module.scss";
import Image from "next/image";
import icon1 from "../../assets/servis/servis1.svg";
import icon2 from "../../assets/servis/servis2.svg";
import icon3 from "../../assets/servis/servis3.svg";
import icon4 from "../../assets/servis/servis4.svg";
import ReusableComponent from "../ReusableComponent/ReusableComponent";

const Service = () => {
  const serviceData = [
    {
      title: " Консультация и техническая поддержка",
      icon: icon1,
    },
    {
      title: " Настройка пультов управления",
      icon: icon2,
    },

    {
      title: " Монтаж",
      icon: icon3,
    },
    {
      title: "Послегарантийное обслуживание",
      icon: icon4,
    },
  ];
  const iconData = useMemo(
    () =>
      serviceData.map((item, index) => (
        <div key={index} className={scss.service__card}>
          <Image src={item.icon} alt="icon" width={50} height={50} />
          <p>{item.title}</p>
        </div>
      )),
    []
  );

  return (
    <div className={scss.service__container}>
      <ReusableComponent title="Сервис">
        <div className={scss.service__blok}>{iconData}</div>
      </ReusableComponent>
    </div>
  );
};

export default Service;
