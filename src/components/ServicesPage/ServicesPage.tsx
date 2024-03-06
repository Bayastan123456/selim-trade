import { useMemo } from "react";
import scss from "./ServicesPage.module.scss";
import Image from "next/image";
import img1 from "../../assets/ServicesPage/image1.png";
import img2 from "../../assets/ServicesPage/image2.png";
import img3 from "../../assets/ServicesPage/image3.png";
import img4 from "../../assets/ServicesPage/image4.png";
import img5 from "../../assets/ServicesPage/image5.png";
import img6 from "../../assets/ServicesPage/image6.png";
import img7 from "../../assets/ServicesPage/image7.png";
import img8 from "../../assets/ServicesPage/image8.png";
import img9 from "../../assets/ServicesPage/image9.png";
import img10 from "../../assets/ServicesPage/image10.png";
import { servicesData } from "@/api/services";
import Link from "next/link";
const ServicesPage = () => {

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
