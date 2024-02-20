"use client";
import React from "react";
import { useMemo } from "react";
import scss from "./ServicesPage.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { servicesData } from "@/api/services";
const ServicesPage = () => {
  const router = useRouter();
  const dataServicesMap = useMemo(
    () =>
      servicesData.map((item, index) => (
        <div key={index} className={scss.Services__images}>
          <Image
            src={item.image}
            alt="error"
            className={scss.Services__image}
            onClick={() => router.push(`services/${index}`)}
          />

          <div className={scss.Service_text_inner}>
            <p>{item.text}</p>
          </div>
        </div>
      )),
    []
  );

  return (
    <div className={scss.services}>
      <div className={scss.services__text}>
        <h1>Наши услуги</h1>
        <div className={scss.services__text_desc}>
          <h4>
            Наши сотрудники прошли сертифицированные тренинги в Учебных центрах
            ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали
            экзамены и являются обладателями сертификатов по направлениям
            «Воротные системы, ролл ставни, ролл ворота, автоматические
            системы», «Монтаж автоматики».
          </h4>
        </div>
      </div>
      <div className={scss.cards}>{dataServicesMap}</div>
    </div>
  );
};

export default ServicesPage;
