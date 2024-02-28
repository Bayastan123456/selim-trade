import React from "react";
import scss from "./OurServices.module.scss";
import img1 from "../../assets/OurServices/img1.png";
import img2 from "../../assets/OurServices/img2.png";
import img3 from "../../assets/OurServices/img3.png";
import img4 from "../../assets/OurServices/img4.png";
import img5 from "../../assets/OurServices/img5.png";
import img6 from "../../assets/OurServices/img6.png";
import img7 from "../../assets/OurServices/img7.png";
import img8 from "../../assets/OurServices/img8.png";
import img9 from "../../assets/OurServices/img9.png";
import img10 from "../../assets/OurServices/img10.png";
const OurServices = () => {
  return (
    <div className={scss.services_bg}>
      <div className="container">
        <div className={scss.services__up}>
          <h1>Наши услуги</h1>
          <div className={scss.services_right}>
            <p>
              Наши сотрудники прошли сертифицированные тренинги в Учебных
              центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны
              а так же успешно сдали экзамены и являются обладателями
              сертификатов по направлениям «Воротные системы, ролл ставни, ролл
              ворота, автоматические системы», «Монтаж автоматики».
            </p>
          </div>
        </div>
        <div className={scss.ourTeam__text_desc}></div>
      </div>
    </div>
  );
};

export default OurServices;
