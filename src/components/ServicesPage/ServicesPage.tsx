import { useMemo } from "react";
import scss from "./ServicesPage.module.scss";
import Image from "next/image";
import { servicesData } from "@/api/services";
import Link from "next/link";
const ServicesPage = () => {
  interface Data {
    id: any;
    title: any;
    image: any;
  }
  const dataServicesMap = useMemo(
    () =>
      servicesData?.map(({ id, title, image }: Data) => (
        <div key={id} className={scss.Services__images}>
          <Link href={`services/${id}`}>
            <Image src={image} alt="error" className={scss.Services__image} />
          </Link>

          <div className={scss.Service_text_inner}>
            <p>{title}</p>
          </div>
        </div>
      )),
    []
  );

  return (
    <div className={scss.services}>
      <div className={scss.services__text}>
        <h2>Наши услуги</h2>
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
